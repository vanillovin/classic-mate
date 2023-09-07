"use client";

import Link from "next/link";
import React, { useState } from "react";

import { genreDescriptions } from "./data";

function GenreClassicalMusic({ classics }: { classics: Classic[] }) {
	const [selectedGenre, setSelectedGenre] = useState("all");
	const genres = [
		"all",
		...new Set(classics?.map((classic) => classic.genre).flat()),
	];
	const description = genreDescriptions[selectedGenre];
	const results =
		selectedGenre === "all"
			? classics
			: classics.filter((classic) => classic.genre === selectedGenre);

	return (
		<div>
			<div className="flex flex-wrap items-center justify-center">
				{genres.map((genre) => (
					<button
						key={genre}
						onClick={() => setSelectedGenre(genre)}
						className={`warm-vintage-off-white-1 px-2 sm:border-r last:border-r-0 text-warm-vintage-off-white hover:bg-white hover:bg-opacity-20
              ${
								genre === selectedGenre &&
								"border-b border-white text-white font-medium"
							}
            `}
					>
						{genre}
					</button>
				))}
			</div>
			<p className="text-sm sm:text-base text-center p-4 font-light text-autumn-darkblue">
				{description}
			</p>
			<div className="no-scrollbar grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 rounded-sm max-h-80 overflow-y-auto border p-2 border-black">
				{results.map((result) => (
					<Link
						key={result.id}
						href={`/classics/${result.id}`}
						className="text-center font-medium text-sm sm:text-base tracking-tight leading-tight sm:leading-tight border border-black rounded-sm flex items-center justify-center bg-warm-vintage-off-white p-2 shadow-md hover:bg-pantone-berkeley-blue hover:text-warm-vintage-off-white transition-all"
					>
						{result.title}
					</Link>
				))}
			</div>
		</div>
	);
}

export default GenreClassicalMusic;
