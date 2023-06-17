import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";

const PostItemFragment = graphql`
  fragment PostItemFragment on posts {
    id
    title
    starred
  }
`;

function PostItem({ post, setSelectedPostId }) {
  const data = useFragment(PostItemFragment, post);
  return (
    <div className="PostItem" onClick={() => setSelectedPostId(data.id)}>
      <h4>{data.title}</h4>
      <p>{data.starred ? "Starred" : "Not Starred"}</p>
    </div>
  );
}

export default PostItem;
