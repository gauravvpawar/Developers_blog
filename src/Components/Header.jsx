import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import BlogForm from './BlogForm';

const Header = () => {

  // State to toggle the form visibility
  const [showForm, setShowForm] = useState(false);

  // Hook to navigate to a different route
  const navigate = useNavigate();

  // Function to toggle form visibility and redirect to '/createBlog'
  const handleCreateBlogClick = () => {
    // Redirect to the /createBlog route
    navigate('/createBlog');
    setShowForm(true);  // Optionally, toggle form visibility (if needed)
  };

  return (
    <div>
      <div className='fixed top-0 inset-x-0 w-full text-center border-b-2 border-gray-300 shadow-md bg-white py-1'>
        <header>
          <h1 className='font-bold text-3xl uppercase text-center'>Developers Blogs</h1>
          
      {/* Button to trigger navigation to the createBlog route */}
      <div className="mt-5 text-center">
        <button
          onClick={handleCreateBlogClick}
          className="bg-blue-500   text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Create New Blog
        </button>
      </div>

      {/* Conditionally render the BlogForm component when showForm is true */}
      {showForm && <BlogForm />}
        </header>
      </div>

    </div>
  );
}

export default Header;
