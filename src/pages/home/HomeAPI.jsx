import { useState, useEffect } from "react";
import axios from "axios";
import Banner from "./Banner";
import Postcards from "../Postcards";
import Categories from "./Category";
import Search from "./Search";
import Pagination from "../../components/Pagination";
import Logo from "../../images/Logo.png";

function Home() {
  const [posts, setPosts] = useState([]); // State to store fetched posts
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // State to track search term
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [postsPerPage] = useState(2); // Number of posts per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const folderURL =
          "https://api.github.com/repos/Palajambu/test/contents";
        const response = await axios.get(folderURL);
        const files = response.data;

        // Filter to only include Markdown files
        const markdownFiles = files.filter((file) => file.name.endsWith(".md"));

        // Fetch content of each Markdown file
        const markdownContents = await Promise.all(
          markdownFiles.map(async (file) => {
            const res = await axios.get(file.download_url);
            let content = res.data;

            // Extract title from the content
            const titleMatch = content.match(/^Title:\s*(.+)$/m);
            const title = titleMatch
              ? titleMatch[1]
              : file.name.replace(".md", "");

            // Extract description from the content
            const descMatch = content.match(/^Description:\s*(.+)$/m);
            const desc = descMatch && descMatch[1];

            // Extract categories from the content
            const categoryMatch = content.match(/^Category:\s*(.+)$/m);
            const categories = categoryMatch
              ? categoryMatch[1].split(",").map((cat) => cat.trim())
              : ["General"];

            // Extract image from the content
            const imageMatch = content.match(/^Image:\s*(.+)$/m);
            const image = imageMatch ? imageMatch[1] : Logo;

            // Extrcat date
            const dateMatch = file.name.match(/\d{4}-\d{2}-\d{2}/);
            const date = dateMatch[0] ? dateMatch : new Date().toISOString();

            // Remove title and category lines from content
            content = content
              .replace(/^Title:.*$/m, "")
              .replace(/^Category:.*$/m, "")
              .replace(/^Description:.*$/m, "")
              .replace(/^Image:.*$/m, "")
              .trim();

            return {
              id: file.name.replace(".md", ""),
              title: title,
              description: desc.substring(0, 200) + " ...",
              date: date,
              category: categories,
              image: image,
              content: content,
            };
          })
        );

        setPosts(markdownContents); // Set the fetched data to the posts state
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
    setCurrentPage(1); // Reset to first page when category changes
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
    setCurrentPage(1); // Reset to first page when search term changes
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

export default Home;
