import React from "react";
import Link from "next/link";

type TagsProps = {
	tags: string[];
	className: string;
};

function TagLinkList({ tags, className }: TagsProps) {
	return (
		<ul className={`flex flex-wrap items-center gap-1`}>
			{tags.map((tag) => (
				<li key={tag} className={`rounded-sm ${className}`}>
					<Link
						href={{
							pathname: "/tags",
							query: { tag1: encodeURIComponent(tag) },
						}}
					>
						{tag}
					</Link>
				</li>
			))}
		</ul>
	);
}

export default TagLinkList;
