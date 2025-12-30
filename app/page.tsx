import { Rail } from "../components/Rail";

const navLinks = [
	{ label: "Work", href: "/work" },
	{ label: "About", href: "/about" },
	{ label: "Blog", href: "/blog" },
	{ label: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<main className="hero">
			<div className="hero__overlay" aria-hidden />

			<div className="hero__grid">
				<Rail variant="home" />

				<section className="hero__intro">
					<p className="hero__eyebrow">Jonathan Yin</p>
					<p className="hero__headline">
						Software engineer and creative developer simplifying complex interfaces for ambitious teams. Currently crafting immersive experiences in San Francisco.
					</p>
				</section>

				<nav className="hero__nav" aria-label="Primary">
					{navLinks.map((item, index) => (
						<a key={item.label} href={item.href} className="hero__nav-link" style={{ animationDelay: `${0.75 + index * 0.15}s` }}>
							<span className="hero__nav-word">{item.label}</span>
						</a>
					))}
				</nav>
			</div>
		</main>
	);
}
