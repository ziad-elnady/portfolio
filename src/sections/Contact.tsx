import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
	return (
		<div className="py-16 pt-12 lg:py-24 lg:pt-20">
			<div className="container">
				<div className="emerald-sky-gradient rounded-3xl py-8 px-10 text-gray-900 text-center md:text-left relative overflow-hidden z-0">
					<div
						className="absolute inset-0 opacity-5 -z-10"
						style={{
							backgroundImage: `url(${grainImage.src})`
						}}
					/>
					<div className="flex flex-col md:flex-row md:gap-16 gap-8 items-center">
						<div>
							<h2 className="font-serif text-2xl md:text-3xl">Let&lsquo;s create something amazing together</h2>
							<p className="text-sm md:text-base mt-2">Ready to bring your next project to life? Let&lsquo;s connect and discuss how I can help you achieve your goals.</p>
						</div>
						<div>
							<button className="capitalize inline-flex items-center justify-center gap-2 border border-gray-900 bg-gray-900 text-white h-12 px-6 w-max md:px-6 rounded-xl font-semibold">
								<span>contact me</span>
								<ArrowUpRightIcon className="size-4" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
