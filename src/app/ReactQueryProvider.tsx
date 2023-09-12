"use client";

import { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function ReactQueryProvider({ children }: React.PropsWithChildren) {
	const [queryClient] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					// cacheTime: ,
					retry: false,
					staleTime: 5 * 1000,
					refetchOnReconnect: false,
					refetchOnWindowFocus: false,
				},
			},
		}),
	);

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			{/* <ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
	);
}

export default ReactQueryProvider;
