import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import PostItem from "./PostItem";

const PostListFragment = graphql`
  fragment PostListFragment on users {
    posts {
      id
      ...PostItemFragment
    }
  }
`;

function PostList({ user, selectedPostId, setSelectedPostId }) {
  const data = useFragment(PostListFragment, user);

  return (
    <div className="PostList">
      {data.posts.map((post) => (
        <PostItem
          post={post}
          key={post.id}
          setSelectedPostId={setSelectedPostId}
          isSelected={post.id === selectedPostId}
        />
      ))}
    </div>
  );
}

export default PostList;
