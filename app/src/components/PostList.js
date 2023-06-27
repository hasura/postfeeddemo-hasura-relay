import graphql from "babel-plugin-relay/macro";
import { useFragment, usePaginationFragment } from "react-relay";
import PostItem from "./PostItem";

const PostListFragment = graphql`
  fragment PostListFragment on users
  @refetchable(queryName: "PostListPaginationQuery")
  @argumentDefinitions(
    cursor: { type: "String" }
    count: { type: "Int", defaultValue: 3 }
  ) {
    posts_connection(first: $count, after: $cursor)
      @connection(key: "PostListFragment__posts_connection") {
      edges {
        node {
          id
          ...PostItemFragment
        }
      }
    }
  }
`;

function PostList({ user, selectedPostId, setSelectedPostId }) {
  const { data } = usePaginationFragment(PostListFragment, user);

  return (
    <div className="PostList">
      {data.posts_connection.edges.map((post) => (
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
