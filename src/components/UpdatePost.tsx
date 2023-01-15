import styled from "@emotion/styled";
import { useState } from "react";
import useUpdatePostQuery from "src/queries/useUpdatePostQuery";

export default function CreatePost() {
  const [post, setPost] = useState({
    id: -1,
    userId: -1,
    title: "",
    body: "",
  });
  const updatePost = useUpdatePostQuery();

  const handleChangePost = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updatePost.mutate(post);
  };

  const { id, title, body, userId } = post;

  return (
    <PostWrapper>
      <form onSubmit={handleSubmitPost}>
        <input
          name="id"
          value={id}
          placeholder="id"
          onChange={handleChangePost}
        />
        <input
          name="userId"
          value={userId}
          placeholder="userId"
          onChange={handleChangePost}
        />
        <input
          name="title"
          value={title}
          placeholder="title"
          onChange={handleChangePost}
        />
        <input
          name="body"
          value={body}
          placeholder="body"
          onChange={handleChangePost}
        />
        <button type="submit">SEND</button>
      </form>

      {/* <PostWrapper>
        <Post>
          <p>id: {id}</p>
          <p>title: {title}</p>
          <p>body: {body}</p>
        </Post>
      </PostWrapper> */}
    </PostWrapper>
  );
}

// styled
const PostWrapper = styled.div``;

const Post = styled.div``;
