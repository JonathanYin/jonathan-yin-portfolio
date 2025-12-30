import type { Metadata } from "next";
import { Cormorant_Garamond, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const montserrat = Montserrat({
	variable: "--font-body",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

const displaySerif = Cormorant_Garamond({
	variable: "--font-display",
	subsets: ["latin"],
	weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Jonathan Yin",
	description: "Jonathan Yin's Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${montserrat.variable} ${geistMono.variable} ${displaySerif.variable} antialiased`}>{children}</body>
		</html>
	);
}
