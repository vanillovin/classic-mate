import { dehydrate } from "@tanstack/query-core";

import { getClassicalMusic } from "./getClassicalMusic";
import getQueryClient from "../getQueryClient";
import HydrateOnClient from "../hydrateOnClient";
import ClassicalMusicContainer from "./ClassicalMusicContainer";

export default async function HydratedClassics() {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery(["classicalMusic", "1", ""], () =>
		getClassicalMusic(0, 15),
	);
	const dehydratedState = dehydrate(queryClient);

	return (
		<HydrateOnClient state={dehydratedState}>
			<ClassicalMusicContainer />
		</HydrateOnClient>
	);
}
