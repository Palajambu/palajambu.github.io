import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

function Postcards(props) {
  const { posts, loading, error } = props;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-full lg:w-3/4">
      {posts.map((post) => (
        <div key={post.id} className="block rounded w-full lg:flex mb-10">
          <Link to={`/posts/${post.id}`} state={{ post }}>
            <div
              className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
              style={{
                backgroundImage: `url(${post.image})`,
              }}
            ></div>
          </Link>
          <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
            <div>
              <Link to={`/posts/${post.id}`} state={{ post }}>
                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                  {post.title}
                </div>
              </Link>
              <div className="text-gray-700 text-sm w-fit">
                <ReactMarkdown
                  components={{
                    a: ({ node, ...props }) => (
                      <a
                        style={{
                          textDecoration: "none", // Remove underline
                        }}
                        {...props}
                      />
                    ),
                  }}
                >
                  {post.description}
                </ReactMarkdown>
              </div>
            </div>
            <div className="flex mt-3">
              <p className="text-gray-600 text-xs">
                Posted on {post.date.slice(0, 10)},{" "}
                <i>category - {post.category.join(", ")}</i>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Postcards;
