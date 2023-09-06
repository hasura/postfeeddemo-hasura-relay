import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import Labels from "./Labels";

const PostItemFragment = graphql`
  fragment PostItemFragment on posts {
    id
    body
    labels {
      id
      name
    }
    ...LabelsFragment
  }
`;

function PostItem({ post, setSelectedPostId, isSelected }) {
  const data = useFragment(PostItemFragment, post);
  return (
    <div
      className={`PostItem ${isSelected && "selected"}`}
      onClick={() => setSelectedPostId(data.id)}
    >
      <h4>Post ID: {data.id}</h4>
      <div>{data.body}</div>
      <Labels post={data} />
    </div>
  );
}

export default PostItem;
