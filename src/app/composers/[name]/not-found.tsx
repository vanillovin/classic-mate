import Link from "next/link";

type Props = {};

export default function NotFound({}: Props) {
	return (
		<div className="text-center mt-20">
			<h2 className="text-2xl mb-5">작곡가를 찾을 수 없습니다.</h2>
			<Link
				href="/artists"
				className="text-end border-b pl-4 border-black p-1 font-medium hover:text-yellow-500 transition-all"
			>
				작곡가 목록으로 돌아가기
			</Link>
		</div>
	);
}
