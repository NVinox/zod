import type { Metadata } from "next";
import { Suspense } from "react";

import { Header } from "@/widgets/header";

import "@/styles/index.scss";

export const metadata: Metadata = {
	title: "Local Storage",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body>
				<Suspense>
					<Header />
					<main className="main">{children}</main>
				</Suspense>
			</body>
		</html>
	);
}
