import styled from "@emotion/styled";
import GetPost from "./components/GetPost";
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost";

function App() {
  return (
    <AppPage>
      <GetPost />
      <br />
      <br />
      {/* <CreatePost /> */}
      <UpdatePost />
    </AppPage>
  );
}

// styled-components
const AppPage = styled.div``;

export default App;
