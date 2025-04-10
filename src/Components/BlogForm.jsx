import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  }
  return (
    <div className="mt-10 p-6 border border-gray-300 rounded-md max-w-lg mx-auto" >
      <h2 className="text-2xl font-bold mb-4">Create New Blog</h2>
      <button onClick={handleClick} className="bg-blue-500   text-white py-2 px-4 rounded-md hover:bg-blue-600">Home</button>
      <form>
        <div className="mb-4">
          <label htmlFor="authorName" className="block  text-grey-700">Author Name</label>
          <input
            type="text"
            id="authorName"
            name="authorName"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="heading" className="block text-gray-700">Blog Heading</label>
          <input
            type="text"
            id="heading"
            name="heading"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">Blog Description</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="tagline" className="block text-gray-700">Tagline</label>
          <input
            type="text"
            id="tagline"
            name="tagline"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 ml-24w  text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default BlogForm;
