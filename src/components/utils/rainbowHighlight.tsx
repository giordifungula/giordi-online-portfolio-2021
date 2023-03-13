import React from 'react';
import { RoughNotation } from 'react-rough-notation';

interface IProps {
	color: string;
	children: React.ReactNode;
	animationDuration?: number;
}

export const RainbowHighlight = ({
	color,
	children,
	animationDuration = 1000,
}: IProps) => {
	return (
		<RoughNotation
			type="highlight"
			multiline={true}
			padding={[0, 2]}
			iterations={1}
			animationDuration={animationDuration}
			color={color}
		>
			{children}
		</RoughNotation>
	);
};
