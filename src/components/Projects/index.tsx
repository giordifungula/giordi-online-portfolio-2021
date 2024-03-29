import React from 'react';
import { userData } from 'data/userData';

interface IProjectCard {
	title: string;
	link: string;
	imgUrl: string;
	number: string;
}

const Projects = () => {
	return (
		<section className="bg-white dark:bg-primary-dark ">
			<div className="max-w-6xl mx-auto h-48 bg-white dark:bg-primary-dark">
				<h1 className="text-5xl text-ternary-dark dark:text-gray-200 md:text-9xl  font-bold  text-center md:text-left">
					Projects
				</h1>
			</div>
			{/* Grid starts here */}
			<div className="bg-indigo-400 dark:bg-gray-900">
				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
					{userData.projects.map((proj, idx) => (
						<ProjectCard
							title={proj.title}
							link={proj.link}
							imgUrl={proj.imgUrl}
							number={`${idx + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

const ProjectCard = ({ title, link, imgUrl, number }: IProjectCard) => {
	return (
		<a href={link} className="w-full block shadow-2xl">
			<div className="relative overflow-hidden">
				<div className="h-72 object-cover">
					<img
						src={imgUrl}
						alt="portfolio"
						className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
					/>
				</div>
				<h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-indigo-400 rounded-md px-2">
					{title}
				</h1>
				<h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
					{number.length === 1 ? '0' + number : number}
				</h1>
			</div>
		</a>
	);
};

export default Projects;
