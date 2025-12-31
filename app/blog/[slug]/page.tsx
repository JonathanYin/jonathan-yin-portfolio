import { notFound } from "next/navigation";
import { Rail } from "../../../components/Rail";
import { getAllPostsMeta, getPostBySlug } from "../../../lib/posts";

export async function generateStaticParams() {
	const posts = await getAllPostsMeta();
	return posts.map((post) => ({ slug: post.slug }));
}

interface BlogPostPageProps {
	params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
	const { slug } = await params;
	const post = await getPostBySlug(slug);

	if (!post) {
		notFound();
	}

	return (
		<main className="blog-post">
			<div className="blog__grid">
				<Rail variant="contact" />

				<article className="blog-post__content">
					<header className="blog-post__header">
						<p className="blog__eyebrow">Blog</p>
						<h1>{post.meta.title}</h1>
						<time dateTime={post.meta.publishedAt}>{new Date(post.meta.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
					</header>
					<div className="blog-post__body">{post.content}</div>
				</article>
			</div>
		</main>
	);
}
