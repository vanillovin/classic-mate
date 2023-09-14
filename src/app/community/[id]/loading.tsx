import React from "react";

import LoadingSkeleton from "./LoadingSkeleton";

export default function Loading() {
	return (
		<article className="px-3 sm:px-6 pt-3 sm:pt-6 pb-24">
			<LoadingSkeleton />
		</article>
	);
}
