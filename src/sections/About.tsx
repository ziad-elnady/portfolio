'use client';

import ChromeIcon from '@/assets/icons/chrome.svg';
import CssIcon from '@/assets/icons/css3.svg';
import GitHubIcon from '@/assets/icons/github.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import ReactIcon from '@/assets/icons/react.svg';
import JavaScriptIcon from '@/assets/icons/square-js.svg';
import BookImage from '@/assets/images/book-cover.png';
import mapImage from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/memoji-smile.png';
import { Card } from '@/components/Card';
import { CardHeader } from '@/components/CardHeader';
import SectionHeader from '@/components/SectionHeader';
import { ToolboxItems } from '@/components/ToolboxItems';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { twMerge } from 'tailwind-merge';

const toolboxItems = [
	{
		title: 'JavaScript',
		iconType: JavaScriptIcon
	},
	{
		title: 'HTML5',
		iconType: HTMLIcon
	},
	{
		title: 'CSS3',
		iconType: CssIcon
	},
	{
		title: 'React',
		iconType: ReactIcon
	},
	{
		title: 'Chrome',
		iconType: ChromeIcon
	},
	{
		title: 'Github',
		iconType: GitHubIcon
	}
];

const hobbies = [
	{
		title: 'Painting',
		emoji: '🎨',
		position: {
			top: '5%',
			left: '5%'
		}
	},
	{
		title: 'Photography',
		emoji: '📸',
		position: {
			top: '5%',
			left: '50%'
		}
	},
	{
		title: 'Hiking',
		emoji: '🎿',
		position: {
			top: '40%',
			left: '35%'
		}
	},
	{
		title: 'Gaming',
		emoji: '🎮',
		position: {
			top: '35%',
			left: '10%'
		}
	},
	{
		title: 'Fitness',
		emoji: '🏋',
		position: {
			top: '45%',
			left: '70%'
		}
	},
	{
		title: 'Reading',
		emoji: '📖',
		position: {
			top: '65%',
			left: '5%'
		}
	},
	{
		title: 'Skating',
		emoji: '🛹',
		position: {
			top: '70%',
			left: '45%'
		}
	}
];

const ReadsCard = ({ className }: { className?: string }) => {
	return (
		<Card className={twMerge('h-[320px]', className)}>
			<CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
			<div className="w-40 mx-auto mt-2 md:mt-0">
				<Image src={BookImage} alt="Book Cover" />
			</div>
		</Card>
	);
};

const ToolboxCard = ({ className }: { className?: string }) => {
	return (
		<Card className={twMerge('h-[320px]', className)}>
			<CardHeader title="My Toolbox" description="Explore the technologies and tools I use to craft exceptional digital experiences." />
			<ToolboxItems className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" items={toolboxItems} />
			<ToolboxItems className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:15s]" items={toolboxItems} />
		</Card>
	);
};

const BeyondCodeCard = ({ className }: { className?: string }) => {
	const constraintRef = useRef(null);

	return (
		<Card className={twMerge('flex flex-col h-[320px]', className)}>
			<CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm." />
			<div ref={constraintRef} className="relative flex-1">
				{hobbies.map((hobby) => (
					<motion.div
						key={hobby.title}
						drag
						dragConstraints={constraintRef}
						className="inline-flex items-center absolute gap-2 px-6 py-1.5 emerald-sky-gradient rounded-full"
						style={{ top: hobby.position.top, left: hobby.position.left }}>
						<span className="font-medium text-gray-950">{hobby.title}</span>
						<span>{hobby.emoji}</span>
					</motion.div>
				))}
			</div>
		</Card>
	);
};

const MapCard = ({ className }: { className?: string }) => {
	return (
		<Card className={twMerge('h-[320px] relative', className)}>
			<Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top" />
			<div className="absolute center-position size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
				<div className="absolute inset-0 rounded-full emerald-sky-gradient -z-20 animate-ping [animation-duration:2s]"></div>
				<div className="absolute inset-0 rounded-full emerald-sky-gradient -z-10"></div>
				<Image src={smileMemoji} alt="smiling memoji" className="size-20" />
			</div>
		</Card>
	);
};

export const AboutSection = () => {
	return (
		<div className="py-20 lg:py-28">
			<div className="container">
				<SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and what inspires me" />
				<div className="mt-20 flex flex-col gap-8">
					<div className="grid grid-cols-1 md:grid md:grid-cols-5 lg:grid-cols-3 gap-8">
						<ReadsCard className="md:col-span-2 lg:col-span-1" />
						<ToolboxCard className="md:col-span-3 lg:col-span-2" />
					</div>
					<div className="grid grid-cols-1 md:grid md:grid-cols-5 lg:grid-cols-3 gap-8">
						<BeyondCodeCard className="md:col-span-3 lg:col-span-2" />
						<MapCard className="md:col-span-2 lg:col-span-1" />
					</div>
				</div>
			</div>
		</div>
	);
};
