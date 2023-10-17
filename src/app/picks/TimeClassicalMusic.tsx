"use client";

import React from "react";
import Link from "next/link";

import { classicsByTime } from "./data";
import useTimeOfDay from "@/hooks/useTimeOfDay";

function TimeClassicalMusic() {
	const timeOfDay = useTimeOfDay();

	return (
		<table className="w-full rounded-sm shadow-lg bg-white">
			<tbody>
				{Object.keys(classicsByTime).map((key) => (
					<tr
						key={key}
						className="border-b last:border-0 text-sm sm:text-base border-black/70"
					>
						<th
							scope="row"
							className={`border-r p-1 sm:p-3 border-black/70
              ${
								key === timeOfDay &&
								"bg-pantone-brandy-sniffer text-pantone-sun-kiss"
							}
            `}
						>
							{key}
						</th>
						{classicsByTime[key].map((classic) => (
							<td
								key={classic.id}
								className={`leading-4 text-center
                  ${
										key === timeOfDay &&
										"bg-pantone-brandy-sniffer text-pantone-sun-kiss"
									}
                `}
							>
								<Link
									href={`/classics/${classic.id}`}
									className="block w-full h-full px-1 py-4 sm:px-4 sm:py-2 hover:underline "
								>
									{classic.title}
								</Link>
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default TimeClassicalMusic;
