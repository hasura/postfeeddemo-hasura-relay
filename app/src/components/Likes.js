import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import LikeUser from "./LikeUser";

const LikesFragment = graphql`
  fragment LikesFragment on posts {
    likes {
      user {
        id
        ...LikeUserFragment
      }
    }
  }
`;

function Likes({ post }) {
  const data = useFragment(LikesFragment, post);
  return (
    <div className="Likes">
      {data.likes.map((like) => (
        <LikeUser key={like.user.id} user={like.user} />
      ))}
    </div>
  );
}

export default Likes;
