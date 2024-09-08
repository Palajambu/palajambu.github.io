import { Link } from "react-router-dom";
import { FaRegHandPointRight } from "react-icons/fa";

function Categories(props) {
  const { posts, onCategoryClick } = props;

  // Step 1: Collect all unique categories
  const categorySet = new Set();

  posts.forEach((post) => {
    post.category.forEach((category) => {
      categorySet.add(category);
    });
  });

  // Convert the set to an array
  const uniqueCategories = [...categorySet];

  // If no categories to display, return null
  if (uniqueCategories.length === 0) {
    return null;
  }

  return (
    <div className="w-full lg:w-full px-3">
      <div className="mb-4">
        <h5
          className="font-bold text-lg uppercase text-gray-700 px-1 mb-2 cursor-pointer"
          onClick={() => onCategoryClick(null)} // Reset to show all posts
        >
          Categories
        </h5>
        <ul>
          {uniqueCategories.map((category, index) => (
            <li
              key={index}
              className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300"
              onClick={() => onCategoryClick(category)}
            >
              <Link className="flex items-center cursor-pointer">
                <FaRegHandPointRight className="text-slate-800 bx bx-right-arrow-alt ml-1 mr-5"></FaRegHandPointRight>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* divider */}
      <div className="border border-dotted"></div>
    </div>
  );
}

export default Categories;
