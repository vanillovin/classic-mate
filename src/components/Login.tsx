"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

function Login() {
	const router = useRouter();
	const supabase = createClientComponentClient();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSignUp = async () => {
		await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/auth/callback`,
			},
		});
		router.refresh();
	};

	const handleSignIn = async () => {
		await supabase.auth.signInWithPassword({
			email,
			password,
		});
		router.refresh();
	};

	const handleSignOut = async () => {
		await supabase.auth.signOut();
		router.refresh();
	};

	return (
		<div className="flex gap-2">
			<input
				className="border border-black p-1"
				placeholder="email"
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				className="border border-black p-1"
				placeholder="password"
				type="text"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button
				className="bg-black text-white p-1 rounded-sm"
				onClick={handleSignUp}
			>
				Sign up
			</button>
			<button
				className="bg-black text-white p-1 rounded-sm"
				onClick={handleSignIn}
			>
				Sign in
			</button>
			<button
				className="bg-black text-white p-1 rounded-sm"
				onClick={handleSignOut}
			>
				Sign out
			</button>
		</div>
	);
}

export default Login;
