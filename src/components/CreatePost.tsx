import styled from "@emotion/styled";
import { useState } from "react";
import useCreatePostQuery from "src/queries/useCreatePostQuery";

export default function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    body: "",
    userId: -1,
  });
  const createPost = useCreatePostQuery();

  const handleChangePost = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPost.mutate(post);

    console.log("post");
  };

  const { title, body, userId } = post;

  return (
    <PostWrapper>
      <form onSubmit={handleSubmitPost}>
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
