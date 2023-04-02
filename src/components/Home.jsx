import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full ml-2">
          <h2 className="text-4xl sm:text-2xl font-bold text-white">
            Hello! I am
          </h2>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Subhajit Pramanik
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a student of B.Tech (Electronics and Communication Engneering).
          </p>

          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
