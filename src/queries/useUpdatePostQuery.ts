import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePost } from "src/api/jsonplaceholder";
import { queryKeys } from "src/constants/queries";
import { Post } from "src/interface/jsonplaceholder";

export default function useUpdatePostQuery() {
  const queryClient = useQueryClient();

  return useMutation((post: Post) => updatePost(post), {
    onSuccess: () => {
      console.log("updatePost success");
      queryClient.invalidateQueries([queryKeys.GET_POST]);
    },
  });
}
