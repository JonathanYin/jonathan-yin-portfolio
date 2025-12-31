import { Rail } from "../../components/Rail";

const experience = [
	{
		company: "Amplitude",
		href: "https://amplitude.com/",
		location: "San Francisco, CA",
		title: "Software Engineer II",
		start: "January 2026",
		end: "Present",
		description: "Working on product adoption and growth.",
	},
	{
		company: "Typeface",
		href: "https://typeface.ai/",
		location: "Palo Alto, CA",
		title: "Software Engineer",
		start: "December 2024",
		end: "December 2025",
		description: "Led the frontend overhaul of Ads Arc.",
	},
	{
		company: "UC San Diego Computer Science Department",
		href: "https://cse.ucsd.edu/",
		location: "San Diego, CA",
		title: "Instructional Assistant",
		start: "March 2024",
		end: "June 2024",
		description: "Taught CSE 110 - Software Engineering for 350+ students.",
	},
	{
		company: "Center for Applied Internet Data Analysis",
		href: "https://caida.org/",
		location: "San Diego, CA",
		title: "Frontend Developer",
		start: "September 2023",
		end: "March 2024",
		description: "Built simulation tools for Internet QoE research.",
	},
	{
		company: "Northrop Grumman",
		href: "https://northropgrumman.com",
		location: "San Diego, CA",
		title: "Software Engineer Intern",
		start: "June 2023",
		end: "August 2023",
		description: "Drove an org-wide Python documentation initiative that standardized internal tooling.",
	},
	{
		company: "Stellantis",
		href: "https://stellantis.com/",
		location: "Auburn Hills, MI",
		title: "Software Development Intern",
		start: "May 2022",
		end: "August 2022",
		description: "Designed a 3D visualization system in Unreal Engine 5 for interactive vehicle renders.",
	},
	{
		company: "Berkeley Pharma Tech",
		href: "https://berkeleypharmatech.com/",
		location: "Berkeley, CA",
		title: "Software Development Intern",
		start: "June 2021",
		end: "August 2021",
		description: "Built and published the company's flagship Android app to the Google Play Store.",
	},
];

const projects = [
	{
		title: "Tech Map",
		href: "https://techmap.dev",
		dates: "June 2025 - Present",
		description: "Interactive map of SF Bay Area tech companies complete with up-to-date graphics on company info, location, and employee count.",
		technologies: ["React", "TypeScript", "Node.js", "Mapbox"],
		links: [{ label: "Website", href: "https://techmap.dev" }],
	},
	{
		title: "Cloud Frame",
		href: "https://cloud-frame-delta.vercel.app/",
		dates: "Aug 2023 - Aug 2024",
		description: "Cloud-native photo gallery with dynamic filtering, high-res delivery, and automated categorization.",
		technologies: ["Next.js", "TypeScript", "Cloudinary"],
		links: [
			{ label: "Website", href: "https://cloud-frame-delta.vercel.app/" },
			{ label: "Source", href: "https://github.com/JonathanYin/cloud-frame" },
		],
	},
	{
		title: "Sustainability Research",
		href: "https://syn100-wi23-team-6.github.io/Sustainable-Cookies/",
		dates: "Jan 2023 - Apr 2023",
		description: "Interactive research experience and Unity game focused on sustainable food systems.",
		technologies: ["Vue", "Unity", "Node.js"],
		links: [
			{ label: "Website", href: "https://syn100-wi23-team-6.github.io/Sustainable-Cookies/" },
			{ label: "Source", href: "https://github.com/SYN100-WI23-Team-6" },
		],
	},
	{
		title: "Job Application Tracker",
		href: "https://cse110-fa22-group23.github.io/cse110-fa22-group23/",
		dates: "Sept 2022 - Dec 2022",
		description: "Offline-first job tracker with service workers, local storage, and automated testing.",
		technologies: ["HTML", "CSS", "JavaScript"],
		links: [
			{ label: "Website", href: "https://cse110-fa22-group23.github.io/cse110-fa22-group23/" },
			{ label: "Source", href: "https://github.com/cse110-fa22-group23/cse110-fa22-group23" },
		],
	},
];

export default function WorkPage() {
	return (
		<main className="work">
			<div className="work__overlay" aria-hidden />

			<div className="work__grid">
				<Rail variant="contact" />

				<div className="work__content">
					<section className="work__section">
						<div className="work__section-header">
							<p className="work__section-label">Experience</p>
							<p className="work__section-subhead">Scaling products alongside fast-moving teams</p>
						</div>
						<ul className="work__experience-list">
							{experience.map((role) => (
								<li key={`${role.company}-${role.title}`} className="work__experience-item">
									<div className="work__experience-heading">
										<a href={role.href} target="_blank" rel="noreferrer">
											{role.company}
										</a>
										<span>{role.title}</span>
									</div>
									<div className="work__experience-meta">
										<span>{role.location}</span>
										<span>
											{role.start} - {role.end}
										</span>
									</div>
									<p className="work__experience-description">{role.description}</p>
								</li>
							))}
						</ul>
					</section>

					<section className="work__section work__projects">
						<div className="work__section-header">
							<p className="work__section-label">Selected Projects</p>
							<p className="work__section-subhead">Independent explorations</p>
						</div>

						<div className="work__projects-grid">
							{projects.map((project) => (
								<article key={project.title} className="work__project-card">
									<div className="work__project-header">
										<h3>
											<a href={project.href} target="_blank" rel="noreferrer">
												{project.title}
											</a>
										</h3>
										<span>{project.dates}</span>
									</div>
									<p className="work__project-description">{project.description}</p>
									<ul className="work__tech-list">
										{project.technologies.map((tech) => (
											<li key={`${project.title}-${tech}`}>{tech}</li>
										))}
									</ul>
									<div className="work__project-links">
										{project.links.map((link) => (
											<a key={`${project.title}-${link.label}`} href={link.href} target="_blank" rel="noreferrer">
												{link.label}
											</a>
										))}
									</div>
								</article>
							))}
						</div>
					</section>
				</div>
			</div>
		</main>
	);
}
