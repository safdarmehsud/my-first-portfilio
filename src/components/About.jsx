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

        <p className="text-xl mt-20">
        Safdar Rehman, a frontend developer with ambition bold,
        HTML, CSS, Bootstrap, his craft he's eager to mold.
        In JavaScript basics and React.js, he finds his stride,
        With each line of code, his passion cannot hide.
        </p>

        <br />

        <p className="text-xl">
        Through the layers of the web, he deftly navigates,
        His aim, a full stack developer, he eagerly awaits.
        From pixel-perfect designs to dynamic user flows,
        His expertise in frontend development only grows.
        
        But Safdar dreams of more, of databases and servers,
        To craft complete solutions, his ambition fervors.
        With every project tackled, he hones his skill set wide,
        Safdar Rehman, the full stack developer, soon to stride.
        </p>
      </div>
    </div>
  );
};

export default About;
