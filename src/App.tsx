import { useTestQuery } from "./queries/test-query";

export function App() {
  const { data } = useTestQuery();

  return <>{data?.message ?? "loading..."}</>;
}
