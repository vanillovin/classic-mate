import { dehydrate } from "@tanstack/query-core";

import { getClassics } from "./getClassics";
import getQueryClient from "../getQueryClient";
import HydrateOnClient from "../hydrateOnClient";
import ClassicsContainer from "./ClassicsContainer";

export default async function HydratedClassics() {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery(
		["classics", "1", ""],
		() => getClassics(0, 15),
	);
	const dehydratedState = dehydrate(queryClient);

	return (
		<HydrateOnClient state={dehydratedState}>
			<ClassicsContainer />
		</HydrateOnClient>
	);
}
