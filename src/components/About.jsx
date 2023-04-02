import React from "react";

const About = () => {
    return (
      <div
        name="about"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>

          <p className="text-xl mt-5">
            Hello! I'm Subhajit Pramanik, a passionate web developer in building innovative and user-friendly
            websites and web applications. My goal is to create digital
            experiences that are both visually appealing and highly functional,
            while also providing an enjoyable user experience.
          </p>

          <p className="text-xl mt-5">
            I have a solid foundation in web development, including HTML, CSS,
            JavaScript, and React, as well as experience with back-end
            technologies such as C++ and Java. I'm a lifelong learner and enjoy
            keeping up with the latest trends and best practices in the industry
            to continuously improve my skills and knowledge.
          </p>

          <p className="text-xl mt-5">
            Collaboration and communication are essential to me, and I enjoy
            working closely with clients and team members to deliver projects
            that meet their needs and exceed their expectations. Whether it's
            developing custom solutions or working on existing projects, I take
            pride in delivering high-quality results that are both scalable and
            maintainable.
          </p>

          <p className="text-xl mt-5">
            In my free time, I enjoy exploring new technologies and contributing
            to open-source projects. I'm also passionate about sharing my
            knowledge with others and enjoy mentoring junior developers and
            participating in online communities.
          </p>

          <p className="text-xl mt-5">
            Thank you for taking the time to learn more about me, and I look
            forward to the opportunity to work with you on your next project!
          </p>
        </div>
      </div>
    );
}

export default About;