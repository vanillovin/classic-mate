"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/components/providers/supabase-provider";

export default function LoginForm() {
	const router = useRouter();
	const { supabase } = useSupabase();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	async function handleSignIn(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		setIsLoading(true);
		try {
			const { error } = await supabase.auth.signInWithPassword({
				email,
				password,
			});
			if (error) throw error;
			router.back();
			toast.success("로그인이 완료됐습니다!");
		} catch (err: any) {
			toast.error("뭔가 잘못됐어요! " + err.message);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<form onSubmit={handleSignIn} className="w-full flex flex-col">
			<label htmlFor="email" className="sr-only">
				이메일
			</label>
			<input
				id="email"
				type="email"
				name="email"
				placeholder="이메일"
				className="bg-white shadow-md bg-opacity-70 py-1 px-2 rounded-sm mb-2 placeholder:text-sm"
				autoFocus
				required
				pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
			/>
			<label htmlFor="password" className="sr-only">
				비밀번호
			</label>
			<input
				id="password"
				type="password"
				name="password"
				placeholder="비밀번호"
				className="bg-white shadow-md bg-opacity-70 py-1 px-2 rounded-sm mb-2 placeholder:text-sm"
				minLength={6}
				maxLength={12}
				required
			/>
			<button
				type="submit"
				disabled={isLoading}
				aria-label={isLoading ? "이메일 로그인 처리 중..." : "이메일로 로그인"}
				className={`flex items-center justify-center p-2 font-medium text-sm rounded-sm hover:opacity-70 transition-all text-white bg-warm-vintage-burnt-orange shadow-md
          ${isLoading ? "cursor-not-allowed" : ""}
        `}
			>
				{/* aria-live="polite": 현재 읽고 있는 내용을 끝낸 후에 변경된 내용을 읽어달라 */}
				<span aria-live="polite">
					{isLoading ? "이메일 로그인 처리 중..." : "이메일로 로그인"}
				</span>
				{isLoading && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-4 h-4 animate-spin ml-2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z"
						/>
					</svg>
				)}
			</button>
		</form>
	);
}
