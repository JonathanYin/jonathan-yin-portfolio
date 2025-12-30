const navLinks = [
	{ label: "Work", href: "#work" },
	{ label: "About", href: "#about" },
	{ label: "Blog", href: "#blog" },
	{ label: "Contact", href: "#contact" },
];

const socialLinks = [
	{ label: "in", name: "LinkedIn", href: "https://www.linkedin.com" },
	{ label: "db", name: "Dribbble", href: "https://dribbble.com" },
	{ label: "gh", name: "GitHub", href: "https://github.com" },
];

export default function Home() {
	return (
		<main className="hero">
			<div className="hero__overlay" aria-hidden />

			<div className="hero__grid">
				<aside className="hero__sidebar">
					<div className="hero__socials" aria-label="Social links">
						{socialLinks.map((link) => (
							<a key={link.label} className="hero__social-link" href={link.href} aria-label={link.name} target="_blank" rel="noreferrer">
								{link.label}
							</a>
						))}
					</div>
					<div className="hero__divider" aria-hidden />
					<span>© 2025</span>
				</aside>

				<section className="hero__intro">
					<p className="hero__eyebrow">Jonathan Yin</p>
					<p className="hero__headline">
						Product designer and creative developer simplifying complex interfaces for ambitious teams. Currently crafting immersive experiences in San Francisco.
					</p>
				</section>

				<nav className="hero__nav" aria-label="Primary">
					{navLinks.map((item, index) => (
						<a key={item.label} href={item.href} className="hero__nav-link" style={{ animationDelay: `${0.75 + index * 0.15}s` }}>
							{item.label}
						</a>
					))}
				</nav>
			</div>
		</main>
	);
}
