import React, { useEffect, useState } from "react";
import img1 from "../assets/book_Img.jpg";
import { Link, useNavigate } from "react-router";

const BookStallPage = () => {
 const [showBooks, setShowBooks] = useState([]);

 const [Idelete, setIDelete] = useState([]);

 useEffect(() => {
  fetch("http://localhost:5000/books")
   .then((res) => res.json())
   .then((data) => setShowBooks(data));
 }, []);

 const navigate = useNavigate();

 const date = new Date();
 const year = date.toISOString().split("-")[0];
 //  console.log(showBooks);

 const handleClick = (_id) => {
  fetch(`http://localhost:5000/books/${_id}`, {
   method: "DELETE",
  })
   .then((res) => res.json())
   .then((data) => {
    console.log(data);
   });
 };

 return (
  <div className="max-w-7xl mx-auto bg-gray-100 text-gray-900">
   {/* Header Section */}
   <header className="bg-blue-600 text-white text-center py-12">
    <Link to="/addbook">add book</Link>
    <h1 className="text-4xl font-bold">Welcome to Book Haven</h1>
    <p className="mt-2">Your one-stop destination for every genre of books</p>
    <button
     onClick={() => navigate("/addbook")}
     className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-gray-200"
    >
     Add Book
    </button>
   </header>

   {/* Featured Books Section */}
   <section className="py-12 px-6">
    <h2 className="text-3xl font-semibold text-center mb-6">Featured Books</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     {showBooks.map((card, idx) => (
      <div key={idx} className="bg-white shadow-md rounded-md p-4 text-center">
       <img
        src={card.image}
        alt="Book 1"
        className="w-full h-48 object-cover rounded-md"
       />
       <h3 className="mt-4 font-medium">{card.name}</h3>
       <p className="truncate">{card.description}</p>
       <button
        onClick={() => handleClick(card._id)}
        className="bg-red-600 text-white font-semibold px-5 py-2 mt-3"
       >
        Detele
       </button>
       <button
        onClick={() => navigate(`/addbooks/:${card._id}`)}
        className="bg-blue-600 text-white font-semibold px-5 py-2 mt-3 ml-2"
       >
        Details
       </button>
      </div>
     ))}
    </div>
   </section>

   <footer className="bg-blue-600 text-white text-center py-4">
    <p>&copy; {year} Book Haven. All Rights Reserved.</p>
   </footer>
  </div>
 );
};

export default BookStallPage;
