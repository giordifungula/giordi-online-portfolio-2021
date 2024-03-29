import { useState } from 'react';
import { ThemeSwitcherContext } from './ThemeSwitcherContext';

interface IProps {
	children: React.ReactNode;
}

export const ThemeProvider = ({ children }: IProps) => {
	const [theme, setTheme] = useState(localStorage.theme);

	const toggleTheme = () => {
		const mode = theme === 'dark' ? 'light' : 'dark';

		const root = window.document.documentElement;

		root.classList.remove(mode);
		root.classList.add(theme);
		localStorage.setItem('theme', theme);
		setTheme(mode);
	};

	return (
		<ThemeSwitcherContext.Provider
			value={{ activeTheme: theme, toggleTheme }}
		>
			{children}
		</ThemeSwitcherContext.Provider>
	);
};
