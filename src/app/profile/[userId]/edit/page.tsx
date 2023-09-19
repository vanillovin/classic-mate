import { redirect } from "next/navigation";

import EditForm from "./edit-form";
import { createServerClient } from "@/utils/supabase-server";

export default async function ProfileEditPage() {
	const supabase = createServerClient();

	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (!session) redirect("/unauthenticated");

	return (
		<div>
			<h2 className="font-semibold text-2xl">회원정보수정</h2>
			<EditForm />
		</div>
	);
}
