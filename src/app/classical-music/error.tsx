"use client"; // 에러 컴포넌트는 클라이언트 컴포넌트로 만들어야 합니다.

import { useEffect } from "react";

type ErrorProps = {
	error: Error;
	reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="h-screen flex flex-col items-center space-y-2 pt-20">
			<h2>무언가 잘못됐어요!</h2>
			<button
				className="rounded-sm px-1 hover:bg-opacity-70 text-white bg-pantone-cocoa"
				onClick={
					// 세그먼트를 재 렌더링 하여 복구를 시도합니다.
					() => reset()
				}
			>
				다시 시도
			</button>
		</div>
	);
}
