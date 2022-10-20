import React, { useState } from "react";
import axios from "axios";
import BookList from "./BookList";
import Main from "./Main";

const SideBar = () => {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyBQLZRNwY7VOtx5yc9LmMzhLRhVd6M3cJg"
  );

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(e) {
    console.log(e.target.attributes.link.nodeValue);
    const subject = e.target.attributes.link.nodeValue;
    axios.get(`${subject}`).then((data) => {
      console.log(data.data.items);
      setResult(data.data.items);
    });
  }

  const sidebarData = [
    {
      title: "Science",
      link: "https://www.googleapis.com/books/v1/volumes?q=subject:science&key=AIzaSyBQLZRNwY7VOtx5yc9LmMzhLRhVd6M3cJg&maxResults=40",
    },
    {
      title: "History",
      link: "https://www.googleapis.com/books/v1/volumes?q=subject:history&key=AIzaSyBQLZRNwY7VOtx5yc9LmMzhLRhVd6M3cJg&maxResults=40",
    },
    {
      title: "Fiction",
      link: "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&key=AIzaSyBQLZRNwY7VOtx5yc9LmMzhLRhVd6M3cJg&maxResults=40",
    },
    {
      title: "Non-Fiction",
      link: "https://www.googleapis.com/books/v1/volumes?q=subject:nonfiction&key=AIzaSyBQLZRNwY7VOtx5yc9LmMzhLRhVd6M3cJg&maxResults=40",
    },
    {
      title: "Poetry",
      link: "https://www.googleapis.com/books/v1/volumes?q=subject:poetry&key=AIzaSyBQLZRNwY7VOtx5yc9LmMzhLRhVd6M3cJg&maxResults=40",
    },
    {
      title: "Education",
      link: "https://www.googleapis.com/books/v1/volumes?q=subject:education&key=AIzaSyBQLZRNwY7VOtx5yc9LmMzhLRhVd6M3cJg&maxResults=40",
    },
    {
      title: "Religion",
      link: "https://www.googleapis.com/books/v1/volumes?q=subject:religion&key=AIzaSyBQLZRNwY7VOtx5yc9LmMzhLRhVd6M3cJg&maxResults=40",
    },
    {
      title: "Computers",
      link: "https://www.googleapis.com/books/v1/volumes?q=subject:computers&key=AIzaSyBQLZRNwY7VOtx5yc9LmMzhLRhVd6M3cJg&maxResults=40",
    },
  ];

  return (
    <div
      className={`top-0 left-0 w-[15vw] mt-20 relative h-[100vw]  bg-slate-500 p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-200 
      `}
    >
      <h3 className="flex justify-center mt-10 text-2xl font-semibold  text-gray-200">
        <ul className="space-y-4 pr-8 hover:cursor-pointer ">
          <li>Trending</li>
          {sidebarData.map((val, key) => {
            return (
              <li key={key} className="hover:text-gray-400">
                <a
                  onClick={handleSubmit}
                  onChange={handleChange}
                  link={val.link}
                >
                  {val.title}
                </a>
              </li>
            );
          })}
        </ul>
      </h3>

      <div className="flex flex-wrap">
        {result.map((book, i) => {
          return (
            <BookList
              key={i}
              image={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : undefined
              }
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
