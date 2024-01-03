"use client";

import React, { useState } from "react";

type NewMessageProps = {
	sendMessage(text: string, clearText: () => void): void;
};

function NewMessage({ sendMessage }: NewMessageProps) {
	const [text, setText] = useState("");
	const clearText = () => setText("");
	const isDisabled = text.trim().length < 4;

	return (
		<form
			onSubmit={(evt) => {
				evt.preventDefault();
				sendMessage(text, clearText);
			}}
			className="flex w-full h-10 items-center justify-center"
		>
			<input
				name="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder=""
				className="h-full flex-1 px-2 py-1"
			/>
			<button
				type="submit"
				className={`w-12 h-full ${
					isDisabled
						? "bg-gray-200"
						: "bg-[#EAAA65] text-white hover:bg-[#133331]"
				}`}
				disabled={isDisabled}
			>
				전송
			</button>
		</form>
	);
}

export default NewMessage;
