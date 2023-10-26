import Link from "next/link";

type PaginationProps = {
	pathname: string;
	currentPage: number;
	totalPages: number;
};

function Pagination({ pathname, currentPage, totalPages }: PaginationProps) {
	// "이전 페이지"와 "다음 페이지" 버튼
	return (
		<div className="flex items-center justify-center">
			<ul className="flex items-center gap-x-2 ">
				{Array.from({ length: totalPages }).map((_, idx) => (
					<li
						key={idx}
						className={`rounded-sm w-6 h-6 sm:w-7 sm:h-7 transition-all shadow-sm hover:bg-pantone-metallic-gold
              ${
								currentPage === idx + 1
									? "bg-pantone-metallic-gold"
									: "bg-white"
							}
            `}
					>
						<Link
							href={{
								pathname,
								query: { page: idx + 1 },
							}}
							aria-label={`${idx + 1} 페이지로 이동`}
							className="flex w-full h-full items-center justify-center"
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
