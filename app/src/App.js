import logo from "./logo.svg";
import "./App.css";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";

const BASE_USER_ID = "WzEsICJwdWJsaWMiLCAidXNlcnMiLCAxXQ==";

const AppQuery = graphql`
  query AppQuery($baseId: ID!) {
    node(id: $baseId) {
      ... on users {
        id
        name
        posts {
          id
          title
          starred
        }
      }
    }
  }
`;

function App() {
  const data = useLazyLoadQuery(AppQuery, { baseId: BASE_USER_ID });
  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
