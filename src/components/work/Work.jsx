import React from "react";
import todoApp from "../../assets/images/todoApp.png";
import travelApp from "../../assets/images/travelApp.png";
import bookingApp from "../../assets/images/bookingApp.png";
import MovieApp from "../../assets/images/MovieApp.png";
import TodoWallPaper from "../../assets/images/TodoWallpaper.png";
import table from "../../assets/images/table.png";
import shopping from "../../assets/images/shopping.png";
import agency from "../../assets/images/agency.png";
import ExpenseTracker from "../../assets/images/ExpenseTracker.png";
import Rick from "../../assets/images/Rick.png";

import WorkCard from "./WorkCard";

const Work = () => {
  const workInfo = [
    {
      title: "Hotel Booking",
      image: travelApp,
      createdBy: "React.js - Tailwind.css",
      codeUrl: "https://github.com/Shaghayegh-93/travel_app",
      demoUrl: "https://hotelbookingapp-sh.netlify.app/",
      id: Math.floor(Math.random() * 1000),
    },
    {
      title: "Movie App",
      createdBy: "React.js - Tailwind.css",
      image: MovieApp,
      codeUrl: "https://github.com/Shaghayegh-93/MovieApplication",
      demoUrl: "https://movie-app-sh.netlify.app/",
      id: Math.floor(Math.random() * 1000),
    },
    {
      title: "Rick And Morty",
      image: Rick,
      // title:""
      codeUrl: "https://github.com/Shaghayegh-93/RickAndMorty",
      demoUrl: "https://ornate-piroshki-244879.netlify.app/",
      id: Math.floor(Math.random() * 1000),
    },
    {
      title: "Todo App",
      image: todoApp,
      codeUrl: "https://github.com/Shaghayegh-93/todo_list_app",
      demoUrl: "https://resplendent-arithmetic-ddb679.netlify.app/",
      id: Math.floor(Math.random() * 1000),
    },
    {
      title: "Todo With Redux",
      image: TodoWallPaper,
      codeUrl: "https://github.com/Shaghayegh-93/NoteApp",
      demoUrl: "https://lighthearted-macaron-43c0e7.netlify.app/",
      id: Math.floor(Math.random() * 1000),
    },

    // {
    //   image: bookingApp,
    //   codeUrl: "https://github.com/Shaghayegh-93/BookingApp",
    //   demoUrl: "https://master--vermillion-clafoutis-633fe3.netlify.app/",
    //   id: Math.floor(Math.random() * 1000),
    // },

    {
      title: "Table",
      image: table,
      codeUrl: "https://github.com/Shaghayegh-93/table",
      demoUrl: "https://sample-table-taupe.vercel.app/",
      id: Math.floor(Math.random() * 1000),
    },
    // {
    //   image: shopping,
    //   codeUrl: "https://github.com/Shaghayegh-93/shopping-app",
    //   demoUrl: "https://e-commerce-app-git-master-shaghayegh-93.vercel.app/",
    //   id: Math.floor(Math.random() * 1000),
    // },
    {
      image: agency,
      codeUrl: "https://github.com/Shaghayegh-93/agancy-app",
      demoUrl: "https://agancy-app.vercel.app/",
      id: Math.floor(Math.random() * 1000),
    },
    {
      image: ExpenseTracker,
      codeUrl: "https://github.com/Shaghayegh-93/Expense-taracker-App",
      demoUrl: "https://expense-taracker-app.vercel.app/",
      id: Math.floor(Math.random() * 1000),
    },
  ];
  return (
    <div
      name="work"
      className="bg-[#0a192f] md:h-screen w-full text-gray-300 mb-60 "
    >
      <div className="max-w-[1000px] w-full h-full flex flex-col justify-center mx-auto p-4 mt-36 md:mt-[100px]">
        <div className="pb-8 ">
          <h2 className="font-bold border-b-4 border-pink-600 inline text-4xl ">
            Work
          </h2>
          <p className="py-4">Check out some of my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {workInfo.map((work) => {
            return (
              <div key={work.id}>
                <WorkCard
                  style={{ backgroundImage: `url(${work.image})` }}
                  codeUrl={work.codeUrl}
                  demoUrl={work.demoUrl}
                  title={work.title}
                  createdBy={work.createdBy}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
