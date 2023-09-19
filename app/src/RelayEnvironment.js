import { Environment, Network, RecordSource, Store } from "relay-runtime";

const fetchFn = async (request, variables) => {
  const resp = await fetch(process.env.REACT_APP_HASURA_GRAPHQL_GRAPHQL_URL, {
    method: "POST",
    headers: {
      Accept:
        "application/graphql-response+json; charset=utf-8, application/json; charset=utf-8",
      "Content-Type": "application/json",
      // <-- Additional headers like 'Authorization' would go here
      hasura_cloud_pat: process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET,
    },
    body: JSON.stringify({
      query: request.text, // <-- The GraphQL document composed by Relay
      variables,
    }),
  });

  return await resp.json();
};

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn),
    store: new Store(new RecordSource()),
  });
}

export const RelayEnvironment = createRelayEnvironment();
