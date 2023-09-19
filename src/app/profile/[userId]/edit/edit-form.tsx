"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import { useSupabase } from "@/components/providers/supabase-provider";

function EditForm() {
	const router = useRouter();
	// const params = useParams();
	const { supabase, session } = useSupabase();
	const [isLoading, setIsLoading] = useState(false);

	async function editProfile(formData: FormData) {
		const inputData = Object.fromEntries(formData);
		// console.log(inputData);
		setIsLoading(true);
		try {
			const { error } = await supabase
				.from("profiles")
				.update(inputData)
				.eq("id", session?.user.id);

			if (error) throw error;
			toast.success("회원정보 수정이 완료됐습니다.");
			router.refresh();
		} catch (err: any) {
			toast.error(`회원정보 수정 중 문제가 발생했습니다. ${err.message}`);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				editProfile(new FormData(e.currentTarget));
			}}
			className="grid grid-cols-[30%_70%] gap-y-4 mt-8"
		>
			<label htmlFor="nickname" className="font-medium">
				닉네임 <span className="text-vintage-holiday-red">*</span>
			</label>
			<input
				id="nickname"
				name="nickname"
				className="px-2 py-1 rounded-sm shadow-sm placeholder:font-light"
				minLength={3}
				maxLength={10}
				autoComplete="off"
				required
			/>

			<label htmlFor="fullName" className="font-medium">
				성명 <span className="text-gray-400">(선택)</span>
			</label>
			<input
				id="fullName"
				name="full_name"
				className="px-2 py-1 rounded-sm shadow-sm placeholder:font-light"
				minLength={2}
				maxLength={30}
			/>

			<label htmlFor="website" className="font-medium">
				웹사이트 <span className="text-gray-400">(선택)</span>
			</label>
			<input
				type="url"
				id="website"
				name="website"
				className="px-2 py-1 rounded-sm shadow-sm placeholder:font-light"
				minLength={10}
			/>

			<label htmlFor="description" className="font-medium">
				자기소개 <span className="text-gray-400">(선택)</span>
			</label>
			<input
				id="description"
				name="description"
				className="px-2 py-1 rounded-sm shadow-sm placeholder:font-light"
				minLength={2}
				maxLength={40}
			/>

			{/* <label htmlFor='avatarUrl' className='font-medium'>프로필 사진</label>
      <input id='avatarUrl' name='avatar_url' className='px-2 py-1 rounded-sm shadow-sm placeholder:font-light' /> */}

			<button
				type="submit"
				aria-live="polite"
				disabled={isLoading}
				className="p-2 font-semibold shadow-sm col-span-2 rounded-sm transition-colors hover:bg-[#294057] text-white bg-[#436A93]"
			>
				{isLoading ? "회원정보 수정 중..." : "확인"}
			</button>
		</form>
	);
}

export default EditForm;
