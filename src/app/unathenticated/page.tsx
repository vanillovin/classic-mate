import React from "react";
import { redirect } from "next/navigation";

import { createServerClient } from "@/utils/supabase-server";

export default async function UnauthenticatedPage() {
	const supabase = createServerClient();
	const {
		data: { session },
	} = await supabase.auth.getSession();

	if (session) redirect("/");

	return <div>Please sign in to see todos!</div>;
}
