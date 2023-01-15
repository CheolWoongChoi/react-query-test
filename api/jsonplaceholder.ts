import { ApiResponse } from "../interface/common";
import { Post } from "../interface/jsonplaceholder";
import client from "./client";

export const getPost = (id: number): ApiResponse<Post> => {
  return client.get(`/post/${id}`);
};

export const getPostList = (id: number): ApiResponse<Post[]> => {
  return client.get(`/posts`);
};

export const createPost = (payload: {
  title: string;
  body: string;
  userId: number;
}): ApiResponse<Post> => {
  return client.post("/posts", payload);
};

export const updatePost = (payload: {
  id: number;
  title: string;
  body: string;
  userId: number;
}) => {
  return client.put(`/post/${payload.id}`, payload, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
