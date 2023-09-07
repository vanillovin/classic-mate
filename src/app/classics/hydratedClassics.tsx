import { dehydrate } from "@tanstack/query-core";

import getQueryClient from '../getQueryClient';
import HydrateOnClient from '../hydrateOnClient';
import { getClassics } from './getClassics';
import ClassicsContainer from './ClassicsContainer';

export default async function HydratedClassics() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['classics'], () => getClassics(0, 15));
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrateOnClient state={dehydratedState}>
      <ClassicsContainer />
    </HydrateOnClient>
  );
}