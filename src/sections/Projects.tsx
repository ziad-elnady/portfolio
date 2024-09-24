import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png';
import GrainImage from '@/assets/images/grain.jpg';
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png';
import Image, { StaticImageData } from 'next/image';

type ProjectResult = {
	title: string;
};

type Project = {
	company: string;
	year: string;
	title: string;
	results: ProjectResult[];
	link: string;
	image: StaticImageData;
};

const portfolioProjects: Project[] = [
	{
		company: 'Acme Corp',
		year: '2022',
		title: 'Dark Saas Landing Page',
		results: [{ title: 'Enhanced user experience by 40%' }, { title: 'Improved site speed by 50%' }, { title: 'Increased mobile traffic by 35%' }],
		link: 'https://youtu.be/4k7IdSLxh6w',
		image: darkSaasLandingPage
	},
	{
		company: 'Innovative Co',
		year: '2021',
		title: 'Light Saas Landing Page',
		results: [{ title: 'Boosted sales by 20%' }, { title: 'Expanded customer reach by 35%' }, { title: 'Increased brand awareness by 15%' }],
		link: 'https://youtu.be/7hi5zwO75yc',
		image: lightSaasLandingPage
	},
	{
		company: 'Quantum Dynamics',
		year: '2023',
		title: 'AI Startup Landing Page',
		results: [{ title: 'Enhanced user experience by 40%' }, { title: 'Improved site speed by 50%' }, { title: 'Increased mobile traffic by 35%' }],
		link: 'https://youtu.be/Z7I5uSRHMHg',
		image: aiStartupLandingPage
	}
];

const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<div
			key={project.title}
			className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden px-8 md:px-10 lg:px-16 pt-8 md:pt-12 lg:pt-20 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none">
			<div
				className="absolute inset-0 -z-10 opacity-5"
				style={{
					backgroundImage: `url(${GrainImage.src})`
				}}
			/>
			<div className="lg:grid lg:grid-cols-2 lg:gap-16">
				<div className="lg:pb-16">
					<div className="flex">
						<div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-small gap-2 text-transparent bg-clip-text">
							<span>{project.company}</span>
							<span>&bull;</span>
							<span>{project.year}</span>
						</div>
					</div>
					<h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">{project.title}</h3>
					<hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
					<ul className="flex flex-col gap-4 mt-4 md:mt-5">
						{project.results.map((result) => (
							<li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50">
								<CheckCircleIcon className="size-5 md:size-6" />
								<span>{result.title}</span>
							</li>
						))}
					</ul>
					<a href={project.link}>
						<button className="capitalize bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
							<span>visit live site</span>
							<ArrowUpRightIcon className="size-4" />
						</button>
					</a>
				</div>
				<div className="relative">
					<Image src={project.image} alt={project.title} className="mt-8 lg:mt-0 -mb-4 md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
				</div>
			</div>
		</div>
	);
};

export const ProjectsSection = () => {
	return (
		<section className="pb-16 lg:py-24">
			<div className="container">
				<p className="uppercase text-xl text-center font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">real-world results</p>
				<h2 className="capitalize text-center text-3xl md:text-5xl font-serif mt-6">featured projects</h2>
				<p className="text-white/60 md:text-lg lg:text-xl text-center mx-auto mt-4 max-w-md"> See how I transformed concepts into engaging digital experiences</p>
				<div className="flex flex-col gap-20 mt-10 md:mt-20">
					{portfolioProjects.map((project) => (
						<ProjectCard key={project.title} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};
