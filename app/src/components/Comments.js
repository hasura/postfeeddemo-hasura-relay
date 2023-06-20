import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";

const CommentsFragment = graphql`
  fragment CommentsFragment on posts {
    comments(order_by: [{ created_at: desc }, { id: asc }], limit: 4) {
      id
      body
      user {
        id
        name
      }
      comments_likes(order_by: { created_at: desc }, limit: 4) {
        id
        body
      }
    }
  }
`;

function Comments({ post }) {
  const data = useFragment(CommentsFragment, post);
  return (
    <div className="Comments">
      {data.comments.map((comment) => (
        <div key={comment.id} className="Comment">
          <p>{comment.body}</p>
          <div className="CommentLikes">
            {comment.comments_likes.map((like) => (
              <p key={like.id}>{like.body}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments;
