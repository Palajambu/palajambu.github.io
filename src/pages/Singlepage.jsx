import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { AiOutlineArrowRight } from "react-icons/ai";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import "highlight.js/styles/github.css";
import Logo from "../images/Logo.png";

function Singlepage() {
  const location = useLocation();
  const [post, setPost] = useState(location.state?.post || null);
  const [loading, setLoading] = useState(!post);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!post) {
      setError("Post not found");
      setLoading(false);
    }
  }, [post]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <article className="mt-8 max-w-4xl mx-auto px-4">
      <div className="mb-4 md:mb-0 w-full relative">
        <div className="px-4 lg:px-0">
          <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
            {post.title || "Title not available"}
          </h2>
          <div className="py-2 text-green-700 inline-flex items-center justify-center mb-2">
            {post.category
              ? post.category.join(", ")
              : "Category not available"}
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <div>
            <img
              src={post.image || Logo}
              className="object-cover lg:rounded"
              style={{ width: "486px", height: "282px" }}
              alt="Blog Cover"
            />
            <Link
              to={post.image}
              className="block text-center italic text-gray-600 hover:underline hover:text-blue-700"
              target="_blank"
            >
              Source
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12">
        <div className="text-gray-700 text-lg leading-relaxed w-full px-4 lg:px-0">
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkBreaks]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            children={post.content}
            components={{
              hr: ({ node, ...props }) => (
                <hr
                  style={{
                    display: "none",
                  }}
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h2
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginTop: "1.5rem",
                    marginBottom: "1.5rem",
                  }}
                  {...props}
                />
              ),
              p: ({ node, ...props }) => (
                <p
                  style={{
                    marginBottom: "1.5rem", // Adds space between paragraphs
                  }}
                  {...props}
                />
              ),
              a: ({ node, ...props }) => (
                <a
                  style={{
                    color: "#1d4ed8",
                    textDecoration: "none",
                    transition: "color 0.2s ease, text-decoration 0.2s ease", // Smooth transition
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.textDecoration = "underline")
                  } // Add underline on hover
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.textDecoration = "none")
                  } // Remove underline on mouse leave
                  {...props}
                />
              ),
              code: ({ node, ...props }) => (
                <code
                  style={{
                    display: "block", // Code block takes full width
                    padding: "1rem", // Adds padding inside the code block
                    backgroundColor: "#f5f5f5", // Light background for contrast
                    borderRadius: "5px", // Rounded corners for better aesthetics
                    marginBottom: "1.5rem", // Space after the code block
                  }}
                  {...props}
                />
              ),
              ul: ({ node, ...props }) => (
                <ul
                  style={{
                    paddingLeft: "1.5rem",
                    marginBottom: "1.5rem",
                    listStyleType: "disc", // Unordered list items use bullet points
                  }}
                  {...props}
                />
              ),
              ol: ({ node, ...props }) => (
                <ol
                  style={{
                    paddingLeft: "1.5rem",
                    marginBottom: "1.5rem",
                    listStyleType: "decimal", // Ordered list items use numbers
                  }}
                  {...props}
                />
              ),
              li: ({ node, ...props }) => (
                <li
                  style={{
                    marginBottom: "0.5rem", // Adds space between list items
                  }}
                  {...props}
                />
              ),
              img: ({ node, ...props }) => (
                <img
                  style={{
                    display: "block", // Centers the image
                    margin: "0 auto", // Centers the image horizontally
                    maxWidth: "70%", // Scales image to 70% of its container width
                    height: "auto", // Maintains aspect ratio
                  }}
                  {...props}
                />
              ),
              em: ({ node, ...props }) => (
                <em
                  style={{
                    display: "block", // Centers the text similar to images
                    textAlign: "center", // Centers the text within the block
                    fontStyle: "italic",
                    color: "#555", // Custom color for emphasized text
                    margin: "0.5rem 0", // Adds space above and below for clarity
                  }}
                  {...props}
                />
              ),
            }}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 mt-4 mb-4">
          <Link
            to="/"
            className="text-blue-800 inline-flex items-center justify-center"
          >
            Back to Home
            <AiOutlineArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default Singlepage;
