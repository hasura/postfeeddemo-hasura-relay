import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import Labels from "./Labels";

const PostDetailQuery = graphql`
  query PostDetailQuery($postId: ID!) {
    # TODO node interface currently not working with Hasura v3 Relay API because of root level node > id field that the compiler autogenerates
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
      <Labels post={data} />
    </div>
  );
}

export default PostDetail;
