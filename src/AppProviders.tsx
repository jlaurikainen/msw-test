import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const client = new QueryClient();

export function AppProviders(props: PropsWithChildren) {
  return <QueryClientProvider {...props} client={client} />;
}
