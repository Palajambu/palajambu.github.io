import { MdOutlineCopyright } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className=" bg-gray-50 pt-8 pb-1 px-4 flex justify-center items-center">
      <div>
        <div className="flex items-center mb-4">
          <MdOutlineCopyright className="mr-0.5" />
          <h6 className="font-normal text-gray-500">
            {year} Powered by React.js
          </h6>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-xs">
            Credit template by{" "}
            <Link
              href="https://github.com/mdalmamunit427/blog-website-react-redux"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              mdalmamunit427
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
