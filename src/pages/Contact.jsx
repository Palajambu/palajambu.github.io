import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { TfiGithub } from "react-icons/tfi";
import { Link } from "react-router-dom";

function Contacct() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Lets get in touch!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-center">Contact Info</h3>
          <br />
          <div className="space-y-4">
            <div className="flex items-center">
              <FaEnvelopeOpenText className="mr-2" />
              <Link
                href="mailto:nuki.susanti@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                nuki.susanti@gmail.com
              </Link>
            </div>
            <div className="flex items-center">
              <FaLinkedin className="mr-2" />
              <Link
                href="https://www.linkedin.com/in/nuki-susanti-915594151"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                Linkedin
              </Link>
            </div>
            <div className="flex items-center">
              <TfiGithub className="mr-2" />
              <Link
                href="https://github.com/nuki-susanti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                Github
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Send me a message!
          </h3>
          <form action="https://formspree.io/f/xbjelrqk" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="w-full p-3 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-sky-950 text-white p-3 rounded-md hover:bg-sky-800 transition duration-300"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacct;
