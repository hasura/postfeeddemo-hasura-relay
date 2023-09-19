import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import Labels from "./Labels";

const PostItemFragment = graphql`
  fragment PostItemFragment on posts {
    id
    tid
    body
  }
`;

function PostItem({ post, setSelectedPostId, isSelected }) {
  const data = useFragment(PostItemFragment, post);
  return (
    <div
      className={`PostItem ${isSelected && "selected"}`}
      onClick={() => setSelectedPostId(data.id)}
    >
      <h4>{data.body}</h4>
      <small>DB_ID:{data.tid}</small>
    </div>
  );
}

export default PostItem;
