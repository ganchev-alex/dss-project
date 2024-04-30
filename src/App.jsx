import { useState } from "react";

import Bookshelf from "./bookshelf/Bookshelf";
import NavigationBar from "./navigation/NavigationBar";

import "./App.css";
import BookForm from "./form/BookForm";

const booksData = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "978-0-06-112008-4",
    price: "8.99",
    publicationDate: new Date("1960-07-11"),
    imgSrc:
      "https://m.media-amazon.com/images/I/71FxgtFKcQL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "1984",
    author: "George Orwell",
    isbn: "978-0-452-28423-4",
    price: "9.99",
    publicationDate: new Date("1949-06-08"),
    imgSrc:
      "https://m.media-amazon.com/images/I/81m-yfhwlfL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    isbn: "978-0-316-76948-4",
    price: "9.49",
    publicationDate: new Date("1951-07-16"),
    imgSrc:
      "https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    isbn: "978-0-14-143951-8",
    price: "5.99",
    publicationDate: new Date("1813-01-28"),
    imgSrc:
      "https://m.media-amazon.com/images/I/71CR-BOauCL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
  },
  {
    title: "To the Lighthouse",
    author: "Virginia Woolf",
    isbn: "978-0-15-690739-2",
    price: "11.49",
    publicationDate: new Date("1927-05-05"),
    imgSrc:
      "https://m.media-amazon.com/images/I/71H-0fOURHL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    isbn: "978-1-85326-008-7",
    price: "15.99",
    publicationDate: new Date("1851-10-18"),
    imgSrc:
      "https://m.media-amazon.com/images/I/71d5wo+-MuL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    isbn: "978-0-14-143955-6",
    price: "8.99",
    publicationDate: new Date("1847-12-01"),
    imgSrc: "https://m.media-amazon.com/images/I/81GEFNjQjQL._SL1500_.jpg",
  },
  {
    title: "Animal Farm",
    author: "George Orwell",
    isbn: "978-0-451-52634-2",
    price: "7.99",
    publicationDate: new Date("1945-08-17"),
    imgSrc:
      "https://m.media-amazon.com/images/I/91LUbAcpACL._AC_UF894,1000_QL80_.jpg",
  },
];

function App() {
  const [booksList, setBooksList] = useState(booksData);
  const [currentBookData, setCurrentBookData] = useState(undefined);

  const addBookHandler = function (bookData) {
    setBooksList((previousState) => [...previousState, bookData]);
  };

  const updateBookHandler = function (updatedBookData) {
    const { index } = currentBookData;

    setBooksList((previousState) => {
      const updatedBooksList = [...previousState];
      updatedBooksList[index] = { ...updatedBookData };
      return updatedBooksList;
    });

    setCurrentBookData(undefined);
  };

  return (
    <div className="wrapper">
      <NavigationBar />
      <main className="main">
        <Bookshelf
          booksData={booksList}
          onSetBooksList={setBooksList}
          currentBookData={currentBookData}
          onSetCurrentData={setCurrentBookData}
        />
        <BookForm
          booksData={booksList}
          onAddBook={addBookHandler}
          onUpdateBook={updateBookHandler}
          currentBookData={currentBookData}
        />
      </main>
      <footer>DSS Intership Project - Alexandar Ganchev 2024</footer>
    </div>
  );
}

export default App;
