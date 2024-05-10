"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import * as React from "react"
import { useState, type PropsWithChildren, type ReactElement } from "react"

export const TanstackQueryProvider = ({ children }: PropsWithChildren): ReactElement => {
	const [client] = useState(new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false
			}
		}
	}))

	return (
		<QueryClientProvider client={client}>
			{children}
		</QueryClientProvider>
	)
}