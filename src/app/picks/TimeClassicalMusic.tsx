"use client";

import React from "react";
import Link from "next/link";

import { classicsByTime, timePeriods } from "./data";
import useTimeOfDay, { type TimeOfDay } from "@/hooks/useTimeOfDay";

function TimeClassicalMusic() {
	const timeOfDay = useTimeOfDay();

	return (
		<table className="w-full rounded-sm shadow-lg bg-white/95">
			<tbody>
				{Object.entries(classicsByTime).map(([key, value]) => (
					<tr
						key={key}
						className="border-b last:border-0 text-sm sm:text-base border-black/70"
					>
						<th
							scope="row"
							aria-current={key === timeOfDay ? "time" : undefined}
							className={`border-r p-1 sm:p-3 border-black/70
                ${
									key === timeOfDay &&
									"bg-pantone-brandy-sniffer text-pantone-sun-kiss"
								}
              `}
						>
							<p>{key}</p>
							<p className="-mt-1 text-xs sm:text-sm font-light">
								({timePeriods[key as TimeOfDay]})
							</p>
						</th>
						{value.map((classic) => (
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
									href={`/classical-music/${classic.id}`}
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
