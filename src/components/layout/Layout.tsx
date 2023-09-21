import type { PropsWithChildren } from "react";

import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

function Layout({ children }: PropsWithChildren) {
	return (
		<div className="w-full min-h-screen h-full">
			<MainNavigation />
			<main className="mx-auto pt-2 sm:pt-4">{children}</main>
			<Footer />
		</div>
	);
}

export default Layout;
