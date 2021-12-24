import { useContext } from 'react';
import { FiArrowDownCircle } from 'react-icons/fi';
import developerLight from 'images/developer.svg';
import developerDark from 'images/developer-dark.svg';
import { motion } from 'framer-motion';
import { ThemeSwitcherContext } from 'context/ThemeSwitcher/ThemeSwitcherContext';

const AppBanner = () => {
  const { activeTheme } = useContext(ThemeSwitcherContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
      className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
    >
      <div className="w-full md:w-1/3 text-right">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.1
          }}
          className="text-2xl lg:text-2xl xl:text-2xl text-center sm:text-left font-semibold text-ternary-dark dark:text-primary-light uppercase"
        >
          Hi 👋 , I'm Giordi Fungula
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.2
          }}
          className="mt-4 text-lg sm:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left font-semibold leading-none text-gray-400"
        >
          A Full-Stack Developer & Design Enthusiast
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: 'easeInOut',
            duration: 0.9,
            delay: 0.3
          }}
          className="flex justify-center sm:block"
        >
          <a
            download="GiordiUpdatedCVDecember.pdf"
            href="/files/GiordiUpdatedCVDecember.pdf"
            className="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-4 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white"
            aria-label="Download Resume"
          >
            <FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6"></FiArrowDownCircle>
            <span className="text-lg sm:text-lg">Download CV</span>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeInOut', duration: 1.5, delay: 1 }}
        className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
      >
        <img
          src={activeTheme === 'dark' ? developerLight : developerDark}
          alt="Developer"
        />
      </motion.div>
    </motion.section>
  );
};

export default AppBanner;
