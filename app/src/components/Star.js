import graphql from "babel-plugin-relay/macro";
import { useFragment, useMutation } from "react-relay";

const StarFragment = graphql`
  fragment StarFragment on posts {
    id
    starred
  }
`;

const StarMutation = graphql`
  mutation StarMutation($postId: ID!, $starred: Boolean!) {
    update_posts_by_pk(
      pk_columns: { id: $postId }
      _set: { starred: $starred }
    ) {
      ...StarFragment
    }
  }
`;

function Star({ post }) {
  const data = useFragment(StarFragment, post);

  const [commitMutation, isMutationInFlight] = useMutation(StarMutation);
  function onStarClicked() {
    commitMutation({
      variables: {
        postId: data.id,
        starred: !data.starred,
      },
    });
  }

  return (
    <div className="Star" onClick={onStarClicked}>
      {data.starred ? (
        <i className="fa-solid fa-star"></i>
      ) : (
        <i className="fa-regular fa-star"></i>
      )}
    </div>
  );
}

export default Star;
