import Link from "next/link";
import { Rail } from "../../components/Rail";
import { getAllPostsMeta } from "../../lib/posts";

export default async function BlogPage() {
	const posts = await getAllPostsMeta();

	return (
		<main className="blog">
			<div className="blog__overlay" aria-hidden />

			<div className="blog__grid">
				<Rail variant="contact" />

				<section className="blog__content">
					<header className="blog__header">
						<p className="blog__eyebrow">Blog</p>
						<h1 className="blog__heading">Notes on craft, product, and building.</h1>
						<p className="blog__lede">A journal of unpolished perspectives.</p>
					</header>

					<ul className="blog__posts">
						{posts.map((post, index) => (
							<li key={post.slug} className="blog__post-card" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
								<div className="blog__post-meta">
									<span>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
								</div>
								<h2>
									<Link href={`/blog/${post.slug}`}>{post.title}</Link>
								</h2>
								<p>{post.summary}</p>
								<Link className="blog__post-link" href={`/blog/${post.slug}`}>
									Read post
								</Link>
							</li>
						))}
					</ul>
				</section>
			</div>
		</main>
	);
}
