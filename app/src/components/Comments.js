import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import CommentLikes from "./CommentLikes";

const CommentsFragment = graphql`
  fragment CommentsFragment on posts {
    comments(order_by: { created_at: desc }, limit: 4) {
      id
      body
      ...CommentLikesFragment
    }
  }
`;

function Comments({ post }) {
  const data = useFragment(CommentsFragment, post);
  return (
    <div className="Comments">
      <h4>Recent Comments</h4>
      {data.comments.map((comment) => (
        <div key={comment.id} className="Comment">
          <p>{comment.body}</p>
          <CommentLikes comment={comment} />
        </div>
      ))}
    </div>
  );
}

export default Comments;
