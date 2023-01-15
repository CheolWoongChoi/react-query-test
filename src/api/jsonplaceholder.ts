import { ApiResponse } from "../interface/common";
import { Post } from "../interface/jsonplaceholder";
import client from "./client";

export const getPost = (id: number): ApiResponse<Post> => {
  return client.get(`/posts/${id}`);
};

export const getPostList = (id: number): ApiResponse<Post[]> => {
  return client.get(`/posts`);
};

export const createPost = (payload: Omit<Post, "id">): ApiResponse<Post> => {
  return client.post("/posts", payload);
};

export const updatePost = (payload: Post) => {
  return client.put(`/posts/${payload.id}`, payload, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
