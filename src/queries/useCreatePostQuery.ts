import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "src/api/jsonplaceholder";
import { queryKeys } from "src/constants/queries";
import { Post } from "src/interface/jsonplaceholder";

export default function useCreatePostQuery() {
  const queryClient = useQueryClient();

  return useMutation((post: Omit<Post, "id">) => createPost(post), {
    onSuccess: () => {
      console.log("createPost success");
      queryClient.invalidateQueries([queryKeys.GET_POST]);
    },
  });
}
