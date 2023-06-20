import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";

const LikeUserFragment = graphql`
  fragment LikeUserFragment on users {
    id
    name
  }
`;

function LikeUser({ user }) {
  const data = useFragment(LikeUserFragment, user);
  return (
    <div className="LikeUser">
      <span title={data.name}>{data.name[0]}</span>
    </div>
  );
}

export default LikeUser;
