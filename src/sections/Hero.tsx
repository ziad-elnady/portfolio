import ArrowDown from '@/assets/icons/arrow-down.svg';
import Sparkle from '@/assets/icons/sparkle.svg';
import StarIcon from '@/assets/icons/star.svg';
import grainImage from '@/assets/images/grain.jpg';
import memojiImage from '@/assets/images/memoji-computer.png';
import { HeroOrbit } from '@/components/HeroOrbit';
import Image from 'next/image';

export const HeroSection = () => {
	return (
		<div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
			<div className="absolute inset-0 [mask-image:linear-gradient(to_bottom, transparent, black_10%, black_70%, transparent)]">
				<div className="absolute inset-0 -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}></div>
				<div className="size-[620px] hero-ring"></div>
				<div className="size-[820px] hero-ring"></div>
				<div className="size-[1020px] hero-ring"></div>
				<div className="size-[1220px] hero-ring"></div>
				<HeroOrbit rotation={-72} size={800}>
					<StarIcon className="size-28 text-emerald-300" />
				</HeroOrbit>
				<HeroOrbit rotation={20} size={550}>
					<StarIcon className="size-12 text-emerald-300" />
				</HeroOrbit>
				<HeroOrbit rotation={98} size={590}>
					<StarIcon className="size-8 text-emerald-300" />
				</HeroOrbit>
				<HeroOrbit rotation={-14} size={430}>
					<Sparkle className="size-8 text-emerald-300/20" />
				</HeroOrbit>
				<HeroOrbit rotation={79} size={440}>
					<Sparkle className="size-5 text-emerald-300/20" />
				</HeroOrbit>
				<HeroOrbit rotation={178} size={530}>
					<Sparkle className="size-10 text-emerald-300/20" />
				</HeroOrbit>
				<HeroOrbit rotation={144} size={710}>
					<Sparkle className="size-14 text-emerald-300/20" />
				</HeroOrbit>
				<HeroOrbit rotation={85} size={720}>
					<div className="size-3 bg-emerald-300/20 rounded-full" />
				</HeroOrbit>
				<HeroOrbit rotation={-41} size={520}>
					<div className="size-2 bg-emerald-300/20 rounded-full" />
				</HeroOrbit>
				<HeroOrbit rotation={-5} size={650}>
					<div className="size-2 bg-emerald-300/20 rounded-full" />
				</HeroOrbit>
			</div>
			<div className="container">
				<div className="flex flex-col items-center">
					<Image src={memojiImage} alt="Person peeking from behind laptop" className="size-[100px]" />
					<div className="inline-flex items-center gap-4 bg-gray-950 px-4 py-1.5 border border-gray-800 rounded-lg">
						<div className="bg-green-500 size-2.5 rounded-full"></div>
						<div className="text-sm font-medium">Available for new projects</div>
					</div>
				</div>
				<div className="max-w-lg mx-auto">
					<h1 className="font-serif text-3xl md:text-5xl capitalize text-center mt-8 tracking-wide">building exceptional user experiences</h1>
					<p className="mt-4 text-center text-white/60 md:text-lg">
						I specialize in transforming designs into functional, high-performing web applications. Let&lsquo;s discuss your next project.
					</p>
					<div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
						<button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
							<span className="font-semibold">Explore My Work</span>
							<ArrowDown className="size-4" />
						</button>
						<button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
							<span>👋</span>
							<span className="font-semibold">Let&lsquo;s Connect</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
