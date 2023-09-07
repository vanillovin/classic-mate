"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useSupabase } from "@/components/providers/supabase-provider";

function EditForm() {
	const router = useRouter();
	const { supabase, session } = useSupabase();

	async function editProfile(formData: FormData) {
		const inputData = Object.fromEntries(formData);
		// console.log(inputData);
		const { error } = await supabase
			.from("profiles")
			.update(inputData)
			.eq("id", session?.user.id);

		if (!error) {
			toast.success("회원정보수정 완료");
			router.refresh();
		} else {
			toast.error(error.message);
		}
	}

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				editProfile(new FormData(e.currentTarget));
			}}
			className="grid grid-cols-[20%_80%] gap-y-4 mt-8"
		>
			<label htmlFor="nickname" className="font-medium">
				닉네임
			</label>
			<input
				id="nickname"
				name="nickname"
				className="px-2 py-1 rounded-sm shadow-sm"
				minLength={3}
				maxLength={10}
				required
			/>

			<label htmlFor="fullName" className="font-medium">
				성명
			</label>
			<input
				id="fullName"
				name="full_name"
				className="px-2 py-1 rounded-sm shadow-sm"
				minLength={2}
				maxLength={30}
			/>

			<label htmlFor="website" className="font-medium">
				웹사이트
			</label>
			<input
				type="url"
				id="website"
				name="website"
				className="px-2 py-1 rounded-sm shadow-sm"
				minLength={10}
			/>

			<label htmlFor="description" className="font-medium">
				자기소개
			</label>
			<input
				id="description"
				name="description"
				className="px-2 py-1 rounded-sm shadow-sm"
				minLength={2}
				maxLength={40}
			/>

			{/* <label htmlFor='avatarUrl' className='font-medium'>프로필 사진</label>
      <input id='avatarUrl' name='avatar_url' className='px-2 py-1 rounded-sm shadow-sm' /> */}

			<button className="p-2 font-semibold shadow-sm col-span-2 rounded-sm hover:bg-[#294057] text-white bg-[#436A93]">
				확인
			</button>
		</form>
	);
}

export default EditForm;
