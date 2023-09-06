import "./App.css";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import { useState } from "react";
import PostList from "./components/PostList";

const BASE_USER_ID = 1;

const AppQuery = graphql`
  query AppQuery($baseId: Int!) {
    users_pkey(id: $baseId) {
      id
      name
    }
  }
`;

function App() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  const data = useLazyLoadQuery(AppQuery, { baseId: BASE_USER_ID });

  return (
    <div className="App">
      <h2 className="Header">
        {data.name}
        <span className="AppType">&nbsp;&nbsp;HASURA</span>
      </h2>
      <div />
      <PostList
        user={data.node}
        selectedPostId={selectedPostId}
        setSelectedPostId={setSelectedPostId}
      />
    </div>
  );
}

export default App;
