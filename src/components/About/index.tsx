import React from 'react';
import profileImage from 'images/myself.jpeg';
import giphy from 'images/animated.gif';
import { aboutMeInfo } from 'data/aboutMeInfo';

const About = () => {
  return (
    // TODO: to add animation to about page
    <div className="container mx-auto">
      <div className="block sm:flex sm:gap-10 mt-5 sm:mt-20">
        {/* About me portfolio image start */}
        <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
          <img src={profileImage} className="rounded-lg w-96" alt="" />
        </div>
        {/* Add Giphy here */}

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
    </div>
  );
};

export default About;
