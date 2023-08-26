"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function Providers({ children }: React.PropsWithChildren) {
	const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          // cacheTime: ,
          retry: false,
          staleTime: 5 * 1000,
          refetchOnReconnect: false,
          refetchOnWindowFocus: false,
        }
      }
    })
	);

	return (
		<QueryClientProvider client={client}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
		</QueryClientProvider>
	);
}

export default Providers;