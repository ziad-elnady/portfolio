export default function SectionHeader({ title, eyebrow, description }: { title: string; eyebrow: string; description: string }) {
	return (
		<>
			<div className="flex justify-center">
				<p className="uppercase text-xl text-center font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">{eyebrow}</p>
			</div>
			<h2 className="capitalize text-center text-3xl md:text-5xl font-serif mt-6">{title}</h2>
			<p className="text-white/60 md:text-lg lg:text-xl text-center mx-auto mt-4 max-w-md">{description}</p>
		</>
	);
}
