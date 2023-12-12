import { dehydrate } from "@tanstack/query-core";

import { getClassicalMusicList } from "./getClassicalMusicList";
import getQueryClient from "../getQueryClient";
import HydrateOnClient from "../hydrateOnClient";
import ClassicalMusicContainer from "./ClassicalMusicContainer";

export default async function HydratedClassics() {
	const queryClient = getQueryClient();
	await queryClient.prefetchQuery(["classicalMusicList", "1", ""], () =>
		getClassicalMusicList(0, 15),
	);
	const dehydratedState = dehydrate(queryClient);

	return (
		<HydrateOnClient state={dehydratedState}>
			<ClassicalMusicContainer />
		</HydrateOnClient>
	);
}
