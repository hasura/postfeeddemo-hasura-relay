import "./App.css";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { useState } from "react";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import { Suspense } from "react";

const BASE_USER_ID = 1;

const AppQuery = graphql`
  query AppQuery($baseId: Int!) {
    UserById(tid: $baseId) {
      id
      name
      ...PostListFragment
    }
  }
`;

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const data = useLazyLoadQuery(AppQuery, { baseId: BASE_USER_ID });

  return (
    <div className="App">
      <h2 className="Header">
        {data.UserById.name}
        <span className="AppType">&nbsp;&nbsp;HASURA</span>
      </h2>
      <div />
      <PostList
        user={data.UserById}
        selectedPostId={selectedPostId}
        setSelectedPostId={setSelectedPostId}
      />
      <Suspense fallback={<div>Loading... </div>}>
        {" "}
        {(selectedPostId && <PostDetail postId={selectedPostId} />) ||
          "No post selected"}
      </Suspense>
    </div>
  );
}

export default App;
