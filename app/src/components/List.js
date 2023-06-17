import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";

const ListFragment = graphql`
  fragment ListFragment on users {
    ... on posts {
      id
      title
      starred
    }
  }
`;

function foo() {
  //
}
