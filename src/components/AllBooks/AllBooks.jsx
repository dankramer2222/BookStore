import React from 'react';
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa6";

const BooksData = [
    {
      id: 1,
      img: Book1,
      title: "Who's there",
      rating: 5.0,
      author: "Someone",
    },
    {
      id: 2,
      img: Book2,
      title: "His Life",
      rating: 4.5,
      author: "John",
    },
    {
      id: 3,
      img: Book3,
      title: "Lost boy",
      rating: 4.7,
      author: "Lost Girl",
    },
    {
      id: 4,
      img: Book2,
      title: "His Life",
      rating: 4.4,
      author: "Someone",
    },
    {
      id: 5,
      img: Book1,
      title: "Who's There",
      rating: 4.5,
      author: "Someone",
    },
  ];

const AllBooks = () => {
  return (
    <>
    <div className='py-10'>
        <div className='container py-10'>
            {/*header*/}
            <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Best Choice for you
            </p>
            <h1 className="text-3xl font-bold">Hottest Reads of the Day</h1>
            <p className="text-xs text-gray-400">
            Discover today's most anticipated books, handpicked for you. 
            Immerse yourself in the latest literary sensations with our Hottest Reads of the Day collection.
            </p>
          </div>
          {/*card*/}
          <div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                {
                    BooksData.map((data) => (
                        <div className='space-y-3'> 
                            <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md'/>
                            <div>
                                <h2 className='font-semibold'>{data.title}</h2>
                                <p className='text-sm text-gray-700 dark:text-gray-400'>{data.author}</p>
                                <div className='flex-items-center gap-1'>
                                    <FaStar className="text-yellow-500"/>
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
                <div className='flex justify-center'>
                    <button className='text-center mt-10 cursor-pointer bg-primary text-white py-2 px-5 rounded-full'>
                        View All Books
                    </button>
                </div>
          </div>

        </div>
    </div>
    </>
  )
}

export default AllBooks;