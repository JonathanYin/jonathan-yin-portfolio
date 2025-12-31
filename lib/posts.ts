import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import type { ReactElement } from "react";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface PostMeta {
	slug: string;
	title: string;
	summary: string;
	publishedAt: string;
}

export interface BlogPost {
	meta: PostMeta;
	content: ReactElement;
}

export async function getAllPostsMeta(): Promise<PostMeta[]> {
	const entries = await fs.readdir(postsDirectory);

	const posts = await Promise.all(
		entries
			.filter((file) => file.endsWith(".mdx"))
			.map(async (file) => {
				const fullPath = path.join(postsDirectory, file);
				const fileContents = await fs.readFile(fullPath, "utf8");
				const { data } = matter(fileContents);

				return {
					slug: file.replace(/\.mdx$/, ""),
					title: data.title as string,
					summary: data.summary as string,
					publishedAt: data.publishedAt as string,
				};
			})
	);

	return posts.sort((a, b) => (a.publishedAt > b.publishedAt ? -1 : 1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
	const fullPath = path.join(postsDirectory, `${slug}.mdx`);

	try {
		const source = await fs.readFile(fullPath, "utf8");
		const { data, content } = matter(source);
		const compiled = await compileMDX({
			source: content,
		});

		return {
			meta: {
				slug,
				title: data.title as string,
				summary: data.summary as string,
				publishedAt: data.publishedAt as string,
			},
			content: compiled.content,
		};
	} catch {
		return null;
	}
}
