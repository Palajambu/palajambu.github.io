// src/BlogPostEditor.js

import React, { useState } from "react";
import axios from "axios";

const BlogPostEditor = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [category2, setCategory2] = useState("");
  const [category3, setCategory3] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handleCategory2Change = (event) => setCategory2(event.target.value);
  const handleCategory3Change = (event) => setCategory3(event.target.value);
  const handleTextChange = (event) => setText(event.target.value);

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8800/addpost", {
        title,
        category,
        category_2: category2,
        category_3: category3,
        description,
        content: text,
      });

      setSuccessMessage(response.data);
      setTitle("");
      setCategory("");
      setCategory2("");
      setCategory3("");
      setDescription("");
      setText("");
      setError("");
    } catch (error) {
      setError("An error occurred while submitting the post.");
      setSuccessMessage("");
      console.error("Error submitting the post:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Write Your Blog Post
      </h2>

      {/* Title Input */}
      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="title"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter the post title"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Description Input */}
      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Enter a brief description of the post"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows="3"
        />
      </div>

      {/* Blog Content Textarea */}
      <textarea
        className="w-full h-[500px] p-4 text-base border border-gray-300 rounded-md resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={text}
        onChange={handleTextChange}
        placeholder="Start typing your blog post here..."
      />
      <div className="text-right mt-2 text-sm text-gray-500">
        Character count: {text.length}
      </div>

      {/* Category Input */}
      <div className="mt-4">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="category"
        >
          1st Category
        </label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={handleCategoryChange}
          placeholder="Enter a 1st category"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Additional Categories */}
      <div className="mt-4">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="category2"
        >
          2nd Category
        </label>
        <input
          type="text"
          id="category2"
          value={category2}
          onChange={handleCategory2Change}
          placeholder="Enter a 2nd category (optional)"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div className="mt-4">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="category3"
        >
          3rd Category
        </label>
        <input
          type="text"
          id="category3"
          value={category3}
          onChange={handleCategory3Change}
          placeholder="Enter a 3rd category (optional)"
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Error or Success Message */}
      {error && <div className="text-red-500 mt-4">{error}</div>}
      {successMessage && (
        <div className="text-green-500 mt-4">{successMessage}</div>
      )}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Submit Post
      </button>
    </div>
  );
};

export default BlogPostEditor;
