export async function fetchSupabase({ query = "", cache = "force-cache" }) {
	const res = await fetch(
		process.env.NEXT_PUBLIC_SUPABASE_URL + "/rest/v1/" + query,
		{
			cache: cache as RequestCache,
			headers: {
				Apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
			} as HeadersInit,
		},
	);
	if (!res.ok) throw new Error("Network response was not ok");
	const data = await res.json();
	return data;
}
