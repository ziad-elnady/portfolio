import React from 'react';

export const TechIcon = ({ component }: { component: React.ElementType }) => {
	// Capitalizing the component so that we can use as ElementType
	const Component = component;

	/*
		We can fill an SVG with a gradient component that exist
		within the id of the linearGradient that we define elsewhere in the page.
	*/
	return (
		<>
			<Component className="size-10 fill-[url(#tech-icon-gradient)]" />
			<svg className="size-0 absolute">
				<linearGradient id="tech-icon-gradient">
					<stop offset="0%" stopColor="rgb(110 231 183)" />
					<stop offset="100%" stopColor="rgb(56 189 248)" />
				</linearGradient>
			</svg>
		</>
	);
};
