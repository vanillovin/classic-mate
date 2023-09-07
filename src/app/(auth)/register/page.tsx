import Link from "next/link";

import RegisterForm from "./register-form";

export default async function RegisterPage() {
	return (
		<div className="w-full flex flex-col items-center justify-center h-screen -mt-20 p-4 sm:p-0">
			<div className="mx-auto flex w-full flex-col items-center justify-center space-y-6 sm:max-w-[350px]">
				<h1 className="text-2xl font-semibold">회원가입</h1>
				<RegisterForm />
				<Link
					href="/login"
					className="text-sm underline underline-offset-4 text-pantone-brandy-sniffer"
				>
					계정이 있으신가요? 로그인하기
				</Link>
			</div>
		</div>
	);
}
