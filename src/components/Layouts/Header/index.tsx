import { useState, useContext } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ThemeSwitcherContext } from 'context/ThemeSwitcher/ThemeSwitcherContext';
import { motion } from 'framer-motion';
import logo from 'images/logo.png';

const AppHeader = () => {
	const [showMenu] = useState(false);
	const { toggleTheme, activeTheme } = useContext(ThemeSwitcherContext);

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		>
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
				<div className="flex justify-between items-center px-4 sm:px-0">
					<div>
						<Link to="/">
							{activeTheme === 'dark' ? (
								<img
									src={logo}
									className="w-20"
									alt="Dark Logo"
								/>
							) : (
								<img
									src={logo}
									className="w-20"
									alt="Light Logo"
								/>
							)}
						</Link>
					</div>

					<div
						onClick={toggleTheme}
						aria-label="Theme Switcher"
						className="block sm:hidden ml-0 bg-gray-200 dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-500 hover:text-gray-50 text-xl" />
						)}
					</div>
				</div>

				<div className="sm:hidden drawer-side mt-5">
					<ul className="menu overflow-y-auto w-full bg-base-100 text-base-content">
						<Link
							to="/about"
							className="block text-center text-lg border-b-2 font-medium text-primary-dark dark:black hover:text-secondary-dark dark:hover:black  sm:mx-4 mb-2 sm:py-2  pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
							aria-label="About Me"
						>
							About Me
						</Link>
						<Link
							to="/projects"
							className="block text-center text-lg font-medium border-b-2 text-primary-dark dark:black hover:text-secondary-dark dark:hover:black  sm:mx-4 mb-2 sm:py-2 border-primary-light dark:border-secondary-dark"
							aria-label="Projects"
						>
							Projects
						</Link>

						<Link
							to="/experience"
							className="block text-center text-lg font-medium border-b-2 text-primary-dark dark:black hover:text-secondary-dark dark:hover:black sm:mx-4 mb-2 sm:py-2 dark:border-secondary-dark border-primary-light"
							aria-label="Experience"
						>
							Experience
						</Link>

						<Link
							to="/contact"
							className="block text-center text-lg font-medium border-b-2 text-primary-dark dark:black hover:text-secondary-dark dark:hover:black sm:mx-4 mb-2 sm:py-2 dark:border-secondary-dark border-primary-light"
							aria-label="Contact"
						>
							Contact
						</Link>
					</ul>
				</div>

				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<Link
						to="/about"
						className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="About Me"
					>
						About Me
					</Link>
					<Link
						to="/projects"
						className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Projects
					</Link>

					<Link
						to="/experience"
						className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Experience"
					>
						Experience
					</Link>

					<Link
						to="/contact"
						className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="Contact"
					>
						Contact
					</Link>
					{/* TODO to implement Hire me modal */}
					{/* <div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <button
              onClick={showHireMeModal}
              className="sm:hidden block text-left text-md font-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-4 py-2 mt-2"
              aria-label="Hire Me Button"
            >
              Hire Me
            </button>
          </div> */}
				</div>

				<div className="hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
					<Link
						to="/about"
						className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="About Me"
					>
						About Me
					</Link>

					<Link
						to="/experience"
						className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Experience"
					>
						Experience
					</Link>

					<Link
						to="/projects"
						className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						Projects
					</Link>

					<Link
						to="/contact"
						className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
						aria-label="Contact"
					>
						Contact
					</Link>
				</div>

				<div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
					<div
						onClick={toggleTheme}
						aria-label="Theme Switcher"
						className="ml-8 bg-gray-200 dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light text-xl" />
						) : (
							<FiSun className="text-gray-400 hover:text-gray-50 text-xl" />
						)}
					</div>
				</div>
			</div>
		</motion.nav>
	);
};

export default AppHeader;
