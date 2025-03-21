import Navbar from "@/components/Navbar/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const futura = localFont({
	src: "./fonts/futura medium bt.ttf",
	display: "swap",
});

export const metadata: Metadata = {
	title: "PIECE OF SHOW",
	description: "Portfolio of Andrew Zbihlyj",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${futura.className} antialiased`}>
			<body className="flex flex-col min-h-svh flex-nowrap relative">
				<Navbar />
				<main>{children}</main>
			</body>
		</html>
	);
}
