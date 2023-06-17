import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import Star from "./Star";

const PostItemFragment = graphql`
  fragment PostItemFragment on posts {
    id
    title
    ...StarFragment
  }
`;

function PostItem({ post, setSelectedPostId, isSelected }) {
  const data = useFragment(PostItemFragment, post);
  return (
    <div
      className={`PostItem ${isSelected && "selected"}`}
      onClick={() => setSelectedPostId(data.id)}
    >
      <h4>{data.title}</h4>
      <Star post={data} />
    </div>
  );
}

export default PostItem;
