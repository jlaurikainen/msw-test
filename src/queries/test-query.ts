import { useQuery } from "@tanstack/react-query";

type Test = { message: string };

export function useTestQuery() {
  return useQuery<Test>({
    queryKey: ["test"],
    queryFn: () => fetch("/api/test").then((res) => res.json()),
  });
}
