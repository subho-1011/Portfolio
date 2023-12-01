import React from "react";
import toDo from "../assets/portfolio/todo.png";
import netflixClone from "../assets/portfolio/netflixClone.png";
import portfolio from "../assets/portfolio/portfolio.png"
import petZee from "../assets/portfolio/petZee.jpg"
import algoVisualizer from '../assets/portfolio/algoVisualizer.png'

const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: toDo,
            demo: "#",
            code: "https://github.com/subho-1011/Todo-App",
        },
        {
            id: 2,
            src: netflixClone,
            demo: "https://netflix-clone-4ac7b.web.app/",
            code: "https://github.com/subho-1011/Netflix_Clone",
        },
        {
            id: 3,
            src: portfolio,
            demo: "https://portfolio-subho.web.app/",
            code: "https://github.com/subho-1011/Portfolio",
        },
        {
            id: 4,
            src: petZee,
            demo: "https://petzee.pikselas.repl.co/Portfolio%20Page/portfolio.html",
            code: "https://github.com/subho-1011/Project-PetZee",
        },
        {
            id: 5,
            src: algoVisualizer,
            demo: "#",
            code: "https://github.com/subho-1011/Algorithm-Visualizer",
        },
        
    ];

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map((portfolio) => (
                        <div key={portfolio.id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={portfolio.src}
                                alt=""
                                className="rounded-md duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                        <a href={portfolio.demo}>Demo</a>
                                    </button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                                    <a href={portfolio.code}>Code</a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
