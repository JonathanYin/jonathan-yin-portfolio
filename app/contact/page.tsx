import { Rail } from "../../components/Rail";

function ContactOverlay() {
	return <div className="contact__overlay" aria-hidden />;
}

export default function ContactPage() {
	return (
		<main className="contact">
			<ContactOverlay />
			<div className="contact__grid">
				<Rail variant="contact" />

				<section className="contact__body">
					<p className="contact__hello">Hello.</p>
					<p className="contact__lede">Need a well-structured, beautiful website or product experience? Let&apos;s build something timeless together.</p>
					<div className="contact__channels">
						<div>
							<span>Email: </span>
							<a href="mailto:jonathanyin66@gmail.com">jonathanyin66@gmail.com</a>
						</div>
						<div>
							<span>On the Internet: </span>
							<a href="https://www.linkedin.com/in/jonathan-yin-" target="_blank" rel="noreferrer">
								LinkedIn
							</a>
							<span> / </span>
							<a href="https://github.com/jonathanyin" target="_blank" rel="noreferrer">
								GitHub
							</a>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
