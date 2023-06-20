import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import LikeUser from "./LikeUser";

const CommentLikesFragment = graphql`
  fragment CommentLikesFragment on comments {
    comments_likes(order_by: [{ created_at: desc }, { id: asc }], limit: 4) {
      user {
        id
        ...LikeUserFragment
      }
    }
  }
`;

function CommentLikes({ comment }) {
  const data = useFragment(CommentLikesFragment, comment);
  return (
    <div className="Likes">
      <small>Likes: </small>
      {data.comments_likes.map((like) => (
        <LikeUser key={like.user.id} user={like.user} />
      ))}
    </div>
  );
}

export default CommentLikes;
