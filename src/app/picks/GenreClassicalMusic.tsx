"use client";

import Link from "next/link";
import React, { useState } from "react";

import { genreDescriptions } from "./data";

type GenreClassicalMusicProps = { classics: Classic[] };

function GenreClassicalMusic({ classics }: GenreClassicalMusicProps) {
	const [selectedGenre, setSelectedGenre] = useState("all");
	const genres = [
		"all",
		...new Set(classics?.map((classic) => classic.genre).flat()),
	];
	const description = genreDescriptions[selectedGenre];
	const results =
		selectedGenre === "all"
			? classics
			: classics.filter((classic) => classic.genre.includes(selectedGenre));

	return (
		<div>
			<div className="flex flex-wrap items-center justify-center gap-y-1">
				{genres.map((genre) => (
					<button
						key={genre}
						onClick={() => setSelectedGenre(genre)}
						className={`text-sm sm:text-base font-medium px-2 border-r last:border-r-0 text-warm-vintage-off-white hover:bg-white/20
              ${
								genre === selectedGenre &&
								"text-white font-semibold bg-white/20"
							}
            `}
					>
						{genre}
					</button>
				))}
			</div>
			<p className="text-sm sm:text-base text-center p-8 font-light leading-4">
				{description ? `❝ ${description} ❞` : ""}
			</p>
			<div className="comm-scrollbar grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 rounded-sm shadow-md max-h-80 overflow-y-auto border p-2 border-black/80">
				{results.map((result) => (
					<Link
						key={result.id}
						href={`/classical-music/${result.id}`}
						className="text-center font-medium text-sm sm:text-base tracking-tight leading-tight sm:leading-tight border border-black/80 rounded-sm flex items-center justify-center bg-warm-vintage-off-white p-2 shadow-md hover:bg-pantone-berkeley-blue hover:text-warm-vintage-off-white transition-all"
					>
						{result.title}
					</Link>
				))}
			</div>
		</div>
	);
}

export default GenreClassicalMusic;
