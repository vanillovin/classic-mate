import React from "react";

import LoadingSkeleton from "./LoadingSkeleton";

export default function Loading() {
	return (
		<section className="w-full flex flex-col items-center p-3 sm:p-6">
			<LoadingSkeleton />
		</section>
	);
}
