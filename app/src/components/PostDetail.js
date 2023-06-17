import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
import Star from "./Star";

const PostDetailQuery = graphql`
  query PostDetailQuery($postId: ID!) {
    node(id: $postId) {
      ... on posts {
        id
        title
        body
        created_at
        ...StarFragment
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
      <h3>{p.title}</h3>
      <Star post={p} />
      <p>{p.body}</p>
      <p>{p.created_at}</p>
      <p>{p.id}</p>
    </div>
  );
}

export default PostDetail;
