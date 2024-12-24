// AddBook.jsx
import React from "react";

const AddBook = () => {
 return (
  <div className="bg-gray-100 min-h-screen py-12 px-6">
   <div className="max-w-3xl mx-auto bg-white shadow-md rounded-md p-6">
    <h2 className="text-2xl font-bold mb-6">Add a New Book</h2>
    <form className="space-y-4">
     <div>
      <label className="block text-gray-700">Title</label>
      <input
       type="text"
       name="title"
       className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
       required
      />
     </div>

     <div>
      <label className="block text-gray-700">Description</label>
      <textarea
       name="description"
       className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
       rows="4"
       required
      ></textarea>
     </div>

     <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
     >
      Add Book
     </button>
    </form>
   </div>
  </div>
 );
};

export default AddBook;
