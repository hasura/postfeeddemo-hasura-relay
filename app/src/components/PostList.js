import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import PostItem from "./PostItem";

const ListFragment = graphql`
  fragment PostListFragment on users {
    posts(limit: 3) {
      id
      ...PostItemFragment
    }
  }
`;

function PostList({ user, setSelectedPostId }) {
  const data = useFragment(ListFragment, user);

  return (
    <div className="PostList">
      {data.posts.map((post) => (
        <PostItem
          post={post}
          key={post.id}
          setSelectedPostId={setSelectedPostId}
        />
      ))}
    </div>
  );
}

export default PostList;
