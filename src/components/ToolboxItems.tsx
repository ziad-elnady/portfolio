import React, { Fragment } from 'react';
import { twMerge } from 'tailwind-merge';
import { TechIcon } from './TechIcon';

type ToolboxItemsProps = {
	items: {
		title: string;
		iconType: React.ElementType;
	}[];
	className?: string;
	itemsWrapperClassName?: string;
};

export const ToolboxItems = ({ items: toolboxItems, className, itemsWrapperClassName }: ToolboxItemsProps) => {
	return (
		<div className={twMerge('flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]', className)}>
			<div className={twMerge('flex flex-none py-0.5 gap-6 pr-6', itemsWrapperClassName)}>
				{[...new Array(2)].fill(0).map((_, index) => (
					<Fragment key={index}>
						{toolboxItems.map((toolbox) => (
							<div key={toolbox.title} className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
								<TechIcon component={toolbox.iconType} />
								<span className="font-semibold">{toolbox.title}</span>
							</div>
						))}
					</Fragment>
				))}
			</div>
		</div>
	);
};
