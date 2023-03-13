import { createContext } from 'react';

export interface IThemeContext {
	activeTheme: string;
	setActiveTheme?: React.Dispatch<React.SetStateAction<string>>;
	toggleTheme: () => void;
}

export const defaultState: IThemeContext = {
	activeTheme: 'light',
	setActiveTheme: () => {
		return true;
	},
	toggleTheme: () => {
		// noththing
		return true;
	},
};

export const ThemeSwitcherContext = createContext<IThemeContext>(defaultState);
