import Link from "next/link";

export default function NotFound() {
	return (
		<div className="text-center mt-20">
			<h2 className="text-2xl mb-5">회원을 찾을 수 없습니다.</h2>
			<Link
				href="/"
				className="text-end border-b pl-4 border-black p-1 font-medium hover:text-yellow-500 transition-all"
			>
				홈으로 돌아가기
			</Link>
		</div>
	);
}
