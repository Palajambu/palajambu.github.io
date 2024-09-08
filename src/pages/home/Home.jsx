import { useState, useEffect } from "react";
import Banner from "./Banner";
import Postcards from "../Postcards";
import Categories from "./Category";
import Search from "./Search";
import Pagination from "../../components/Pagination";
import Logo from "../../images/Logo.png";

function Home3() {
  const [posts, setPosts] = useState([]); // State to store fetched posts
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // State to track search term
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [postsPerPage] = useState(5); // Number of posts per page

  //Dynamically import all markdown files
  const markdownFiles = import.meta.glob("../../../posts/*.md", {
    eager: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const markdownContents = await Promise.all(
          Object.entries(markdownFiles).map(async ([filePath, content]) => {
            if (!content.default) {
              console.warn(`No default export found in file ${filePath}`);
              return null;
            }

            //Extract metadata (title, description, category, image)
            const titleMatch = content.default.match(/^Title:\s*(.+)$/m);
            const title = titleMatch
              ? titleMatch[1]
              : filePath.replace(".md", "");

            const descMatch = content.default.match(/^Description:\s*(.+)$/m);
            const desc = descMatch ? descMatch[1] : "No description available.";

            const categoryMatch = content.default.match(/^Category:\s*(.+)$/m);
            const categories = categoryMatch
              ? categoryMatch[1].split(",").map((cat) => cat.trim())
              : ["General"];

            const imageMatch = content.default.match(/^Image:\s*(.+)$/m);
            const image = imageMatch ? imageMatch[1] : Logo;

            const dateMatch = filePath.match(/\d{4}-\d{2}-\d{2}/);
            const date = dateMatch ? dateMatch[0] : new Date().toISOString();

            // Remove metadata from content before rendering it
            const cleanContent = content.default
              .replace(/^Title:.*$/m, "")
              .replace(/^Category:.*$/m, "")
              .replace(/^Description:.*$/m, "")
              .replace(/^Image:.*$/m, "")
              .trim();

            return {
              id: filePath.replace("../../../posts/", "").replace(".md", ""),
              title: title,
              description: desc.substring(0, 200) + " ...", // Shorten the description
              date: date,
              category: categories,
              image: image,
              content: cleanContent,
            };
          })
        );

        setPosts(markdownContents);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page when the category changes
  };

  // Filter posts based on selected category and search term
  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory
      ? post.category.includes(selectedCategory)
      : true;
    const matchesSearchTerm = searchTerm
      ? post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    return matchesCategory && matchesSearchTerm;
  });

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to handle search input change
  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to the first page when the search term changes
  };

  return (
    <div>
      <Banner />
      <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
        <div className="w-full lg:w-3/4">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error.message}</p>}
          {filteredPosts.length === 0 && !loading && !error && (
            <p className="text-2xl text-slate-600">"{searchTerm}" not found</p>
          )}
          <Postcards posts={currentPosts} loading={loading} error={error} />
        </div>
        <div className="w-full lg:w-1/4 flex flex-col space-y-4">
          <Categories posts={posts} onCategoryClick={handleCategoryClick} />
          <Search onSearchBox={handleSearchChange} />
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Home3;
