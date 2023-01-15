import styled from "@emotion/styled";
import useGetPostQuery from "../queries/useGetPostQuery";

export default function GetPost() {
  const postId = 1;
  const { isLoading, data } = useGetPostQuery(postId);

  if (!data || isLoading) {
    return (
      <PostWrapper>
        <div>Loading...</div>
      </PostWrapper>
    );
  }

  const { id, title, body } = data;

  return (
    <PostWrapper>
      <Post>
        <p>id: {id}</p>
        <p>title: {title}</p>
        <p>body: {body}</p>
      </Post>
    </PostWrapper>
  );
}

const PostWrapper = styled.div``;

const Post = styled.div``;
