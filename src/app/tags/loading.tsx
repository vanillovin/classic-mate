import React from "react";

import TagsSearchForm from "./TagsSearchForm";
import LoadingSkeleton from "./LoadingSkeleton";

export default function Loading() {
	return (
		<div className="px-3 sm:px-6 pt-3 sm:pt-6 pb-24">
			<TagsSearchForm tags={[]} />
			<LoadingSkeleton />
		</div>
	);
}
