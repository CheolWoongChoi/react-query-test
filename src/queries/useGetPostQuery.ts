import { useQuery } from "@tanstack/react-query";
import { getPost } from "src/api/jsonplaceholder";
import { queryKeys } from "src/constants/queries";

export default function useGetPostQuery(id: number) {
  const fetcher = (id: number) => getPost(id);

  return useQuery([queryKeys.GET_POST, id], () => fetcher(id), {
    enabled: !!id,
  });
}
