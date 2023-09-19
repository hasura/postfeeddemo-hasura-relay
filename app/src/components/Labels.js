import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";

const LabelsFragment = graphql`
  fragment LabelsFragment on posts {
    labels {
      id
      name
    }
  }
`;

function Labels({ post }) {
  const data = useFragment(LabelsFragment, post);
  return (
    <div className="Labels">
      <small>Labels: </small>
      {data.labels.map((label) => (
        <small key={label.id}>{label.name}</small>
      ))}
    </div>
  );
}

export default Labels;
