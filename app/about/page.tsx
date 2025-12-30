import Image from "next/image";
import { Rail } from "../../components/Rail";

const intro = {
	title: "About",
	subtitle: "I'm Jonathan. A developer, designer, and problem solver.",
	lede: "I sit at the intersection of creative direction and technical execution, helping brands create visual stories that connect and inspire.",
	paragraphs: [
		"Over the past few years, I've worked across product, design, and engineering in simplifying complex interfaces for ambitious companies. I obsess over the small details that make software feel human.",
		"Whether I'm exploring typography or building polished web experiences, I aim to keep things minimal, intentional, and timeless.",
	],
};

const portraitSrc = "/images/hero.webp";

export default function AboutPage() {
	return (
		<main className="about">
			<div className="about__overlay" aria-hidden />

			<div className="about__grid">
				<Rail variant="contact" />

				<section className="about__body">
					<div className="about__text">
						<p className="about__eyebrow">{intro.title}</p>
						<h1 className="about__heading">{intro.subtitle}</h1>
						<p className="about__lede">{intro.lede}</p>
						{intro.paragraphs.map((paragraph) => (
							<p className="about__copy" key={paragraph}>
								{paragraph}
							</p>
						))}
					</div>

					<div className="about__image-wrap">
						<Image src={portraitSrc} alt="Portrait" fill sizes="(max-width: 980px) 100vw, 40vw" priority className="about__image" />
					</div>
				</section>
			</div>
		</main>
	);
}
