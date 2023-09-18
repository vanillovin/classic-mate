"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import type { Composer } from "./api";

function ComposerList({ composers }: { composers: Composer[] }) {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
			{composers.map(
				({ id, image, englishName, koreanName, life, shortDesc }) => (
					<Link
						href={`/composers/${englishName}`}
						key={id}
						className="group flex flex-col items-center animate-on-scroll"
					>
						<article className="relative w-72 h-84">
							<div className="absolute top-6 left-8 w-56 h-76 overflow-hidden">
								<Image
									fill
									src={image}
									alt={`${englishName}의 초상화`}
									className="w-full h-full rounded-sm"
								/>
							</div>
							<div className="absolute top-0 left-0 w-full h-full opacity-90 group-hover:opacity-100 transition-all">
								<Image
									fill
									alt="frame"
									src="https://jdmvzmienwxdttefufzf.supabase.co/storage/v1/object/sign/my%20bucket/public/frame.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJteSBidWNrZXQvcHVibGljL2ZyYW1lLnBuZyIsImlhdCI6MTY5MzM3NjQ5MCwiZXhwIjoxNzI0OTEyNDkwfQ.45RClMsukndAS-vLdCnxOlShS622w7-2-TNTj0szJfA&t=2023-08-30T06%3A21%3A30.733Z"
									className="absolute w-full h-full"
								/>
							</div>
						</article>
						<div
							className="w-64 h-32 text-center flex flex-col items-center justify-center mt-4 shadow-md 
            rounded-sm p-2 opacity-95 transition-all bg-white group-hover:bg-warm-vintage-granite"
						>
							<h2 className="font-semibold">{englishName}</h2>
							<p className="font-medium text-sm">
								({koreanName}, {life})
							</p>
							<p className="text-sm mt-1 leading-4 text-vintage-holiday-cyan">
								{shortDesc}
							</p>
						</div>
					</Link>
				),
			)}
		</div>
	);
}

export default ComposerList;
