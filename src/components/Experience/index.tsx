import React from 'react';
import { IExperience, experienceData } from 'data/experience';

const ExperienceCard = ({
  title,
  descriptionA,
  descriptionB,
  year,
  company,
  link: companyLink
}: IExperience) => {
  return (
    <div className="relative experience-card border p-4 rounded-md shadow-xl bg-white text-ternary-dark dark:text-black z-10 mx-4">
      <h1 className="absolute -top-10 md:left-2 md:-top-9 text-2xl text-black font-bold dark:text-white">
        {year}
      </h1>
      <h1 className="font-semibold text-xl">{title}</h1>
      <a href={companyLink} className="text-green-500">
        {company}
      </a>
      <p className="text-gray-800 dark:text-black my-2">{descriptionA}</p>
      <p className="text-gray-800 dark:text-black my-2">{descriptionB}</p>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-primary-dark ">
        <h1 className=" text-5xl text-ternary-dark dark:text-ternary-light md:text-9xl font-bold pb-12 text-center md:text-left">
          Experience
        </h1>
      </div>
      <div className="bg-indigo-400 dark:bg-gray-900 -mt-10 mb-20">
        <div className="grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20">
          {experienceData.map((exp, idx) => (
            <>
              <ExperienceCard
                key={idx}
                title={exp.title}
                descriptionA={exp.descriptionA}
                descriptionB={exp.descriptionB}
                year={exp.year}
                company={exp.company}
                link={exp.link}
              />
              {idx === experienceData.length - 1 ? null : (
                <div className="divider-container flex flex-col items-center -mt-2 ">
                  <div className="w-4 h-4 bg-indigo-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"></div>
                  </div>
                  <div className="w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"></div>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
