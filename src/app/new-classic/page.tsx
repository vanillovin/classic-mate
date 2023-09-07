import ClassicForm from "./classic-form";
import { redirect } from "next/navigation";
import { createServerClient } from "@/utils/supabase-server";

export default async function NewClassicPage() {
	const supabase = createServerClient();
	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (session?.user.id !== "8984b6c0-446b-424f-b279-7ec39abbe6bc") {
		redirect("/unauthenticated");
	}

	return <ClassicForm />;
}
