import { Route, Router, Routes } from "react-router";
import AddBook from "./components/AddBook";
import BookStallPage from "./components/BookStallPage";
import SingleBook from "./components/SingleBook";

export default function App() {
 return (
  <>
   <Routes>
    <Route path="/" element={<BookStallPage />} />
    <Route path="/addbook" element={<AddBook />} />
    <Route path="/singlebook" element={<SingleBook />} />
   </Routes>
   ;
  </>
 );
}
