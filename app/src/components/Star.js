import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";

const StarFragment = graphql`
  fragment StarFragment on posts {
    starred
  }
`;

function Star({ post }) {
  const data = useFragment(StarFragment, post);
  return (
    <div className="Star">
      {data.starred ? (
        <i className="fa-solid fa-star"></i>
      ) : (
        <i className="fa-regular fa-star"></i>
      )}
    </div>
  );
}

export default Star;
