import React from "react";
import { useParams } from "react-router";

const SingleBook = () => {
 const params = useParams();

 //  console.log(params._id);

 //  const book = {
 //   id: id,
 //   title: "The Great Adventure",
 //   author: "John Doe",
 //   description:
 //    "An epic adventure through uncharted lands and thrilling experiences.",
 //   coverImage: "/images/book1.jpg",
 //  };

 return (
  <div className="bg-gray-100 text-gray-900 min-h-screen py-12 px-6">
   <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md p-6">
    <img
     src={""}
     alt="l"
     className="w-full h-96 object-cover rounded-md mb-6"
    />
    <h1 className="text-3xl font-bold mb-2">book</h1>
    <h2 className="text-xl text-gray-600 mb-4">by author</h2>
    <p className="text-gray-700 mb-6">description</p>
    <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
     Buy Now
    </button>
   </div>
  </div>
 );
};

export default SingleBook;
