import { redirect } from "next/navigation";

import EditForm from "./edit-form";
import { createServerClient } from "@/utils/supabase-server";

export default async function EditPostPage({
	params: { id },
}: { params: { id: string } }) {
	const supabase = createServerClient();
	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) redirect("/unauthenticated");

	// const { data: profiles, error } = await supabase
	//   .from('profiles')
	//   .select()
	//   .eq('id', user?.id);

	// if (error) {
	//   console.error("Error fetching profile", error);
	//   redirect('/error');
	// }

	const { data: post, error: fetchPostError } = await supabase
		.from("posts")
		.select("*")
		.match({ id })
		.single();

	if (!post || fetchPostError) {
		redirect(`/community`);
	}

	return (
		<div className="px-6 sm:px-12 pt-6 sm:pt-12 pb-24">
			<EditForm oldPost={post} />
		</div>
	);
}
