import React, { useState, useEffect } from "react";
import Card from "./subComponents/card";

const ShoppingBook = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await fetch("http://localhost/books/index.php");
        const result = await res.json();

        if (result.state === "good") {
          setBooks(result.data);
          console.log(result.data);
        } else {
          setBooks([]);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    getBooks();
  }, []);

  return (
    <div
      className="bg-slate-400 py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-14 
                flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-7"
    >
      <h1 className="w-full text-center text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8">
        SHOPPING BOOK
      </h1>
      {books.map((book) => (
        <Card
          key={book.id}
          title={book.title}
          description={book.description}
          author={book.author}
          image={book.image_path}
        />
      ))}
    </div>
  );
};

export default ShoppingBook;
