import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Singlepage from "./pages/Singlepage";
import "./App.css";
import Category from "./pages/home/Category";
import Search from "./pages/home/Search";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/aboutme",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/resume",
          element: <Resume />,
        },
        {
          path: "/posts/:id",
          element: <Singlepage />,
        },
        {
          path: "/categories",
          element: <Category />,
        },
        {
          path: "/search",
          element: <Search />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

function App() {
  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
