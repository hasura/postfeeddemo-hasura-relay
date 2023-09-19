import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import Labels from "./Labels";

const PostDetailQuery = graphql`
  query PostDetailQuery($postId: ID!) {
    node(id: $postId) {
      ... on posts {
        id
        body
        ...LabelsFragment
      }
    }
  }
`;

function PostDetail({ postId }) {
  const data = useLazyLoadQuery(
    PostDetailQuery,
    { postId }
    //{ fetchPolicy: "store-only" }
  );
  const p = data.node;
  return (
    <div className="PostDetail">
      <h3>{p.body}</h3>
      <p>ID: {p.id}</p>
      <Labels post={data.node} />
    </div>
  );
}

export default PostDetail;
