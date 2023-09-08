import Link from "next/link";

type PaginationProps = {
	pathname: string;
	currentPage: number;
	totalPages: number;
};

function Pagination({ pathname, currentPage, totalPages }: PaginationProps) {
	return (
		<div className="flex items-center justify-center mt-8">
			<ul className="flex items-center gap-x-2 ">
				{Array.from({ length: totalPages }).map((_, idx) => (
					<li
						key={idx}
						className={`rounded-sm w-6 h-6 text-center transition-all shadow-sm hover:bg-pantone-metallic-gold
              ${
								currentPage === idx + 1
									? " bg-pantone-metallic-gold"
									: "bg-white"
							}
            `}
					>
						<Link
							href={{
								pathname,
								query: { page: idx + 1 },
							}}
							className="w-full h-full"
						>
							{idx + 1}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Pagination;
