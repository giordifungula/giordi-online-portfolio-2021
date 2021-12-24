import React from 'react';
import profileImage from 'images/myself.jpeg';
import headshot from 'images/headshot.jpeg';
import { aboutMeInfo } from 'data/aboutMeInfo';

const About = () => {
  return (
    // TODO: to add animation to about page
    <div className="container mx-auto">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-primary-dark ">
        <h1 className=" text-5xl text-ternary-dark dark:text-ternary-light md:text-9xl font-bold pb-12 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-indigo-100 -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-5">
          <p
            className="text-ternary-dark dark:text-ternary-light leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: '3rem' }}
          >
            I'm a software developer that loves building products and web
            applications
            <span className="bg-indigo-500 rounded-md px-2 py-1 text-white">
              that impacts and improves the lives of people.
            </span>
          </p>
        </div>
      </div>
      <div className="block sm:flex sm:gap-10 mt-5 sm:mt-10">
        <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
          <img
            src={headshot}
            className="rounded-lg w-96"
            alt="giordi-profile"
          />
        </div>

        {/* TODO to add toggle switch to select different image  */}

        {/* About me details start */}
        <div className="w-full sm:w-3/4 text-left">
          {aboutMeInfo.map((bio) => (
            <p
              className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
              key={bio.id}
            >
              {bio.bio}
            </p>
          ))}
        </div>
        {/* About me BIO end */}
      </div>
      <div className="block sm:flex sm:gap-10 mt-0 sm:mt-10">
        <div className="block">
          <h1 className="bg-indigo-500 text-6xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
            Tech Stack and Tools
          </h1>
        </div>
      </div>
      <div className="flex flex-row flex-wrap mt-8">
        <img
          alt="JS"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
          className="h-20 w-20 mx-4 my-4 ml-0"
        />
        <img
          alt="TS"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
          className="h-20 w-20 mx-4 my-4"
        />
        <img
          alt="HTML"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
          className="h-20 w-20 mx-4 my-4"
        />
        <img
          alt="CSS"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
          className="h-20 w-20 mx-4 my-4"
        />
        <img
          alt="SASS"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png"
          className="h-20 w-20 mx-4 my-4"
        />
        <img
          alt="GIT"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
          className="h-20 w-20 mx-4 my-4"
        />
        <img
          alt="REACT"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
          className="h-20 w-20 mx-4 my-4"
        />

        <img
          alt="NODE"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
          className="h-20 w-20 mx-4 my-4"
        />
        <img
          alt="MONGODB"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
          className="h-20 w-20 mx-4 my-4"
        />
        <img
          alt="VSCODE"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png"
          className="h-20 w-20 mx-4 my-4"
        />
        <img
          alt="TERMINAL"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png"
          className="h-20 w-20 mx-4 my-4"
        />
      </div>
    </div>
  );
};

export default About;
