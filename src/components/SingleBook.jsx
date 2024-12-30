import React, { useEffect } from "react";
import { useParams } from "react-router";

const SingleBook = () => {
 const params = useParams();

 console.log(params._id);

 useEffect(() => {
  if (params._id) {
   fetch(`http://localhost:5000/books/${params._id}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error fetching book:", error));
  }
 }, [params._id]);

 return (
  <div className="bg-gray-100 text-gray-900 min-h-screen py-12 px-6">
   <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md p-6">
    <img
     src={""}
     alt="Book Cover"
     className="w-full h-96 object-cover rounded-md mb-6"
    />
    <h1 className="text-3xl font-bold mb-2">Book Title</h1>
    <h2 className="text-xl text-gray-600 mb-4">by Author</h2>
    <p className="text-gray-700 mb-6">Book Description</p>
    <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
     Buy Now
    </button>
   </div>
  </div>
 );
};

export default SingleBook;
