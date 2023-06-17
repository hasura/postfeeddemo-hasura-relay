import { Environment, Network, RecordSource, Store } from "relay-runtime";

const HTTP_ENDPOINT = "http://localhost:8080/v1beta1/relay";

const fetchFn = async (request, variables) => {
  const resp = await fetch(HTTP_ENDPOINT, {
    method: "POST",
    headers: {
      Accept:
        "application/graphql-response+json; charset=utf-8, application/json; charset=utf-8",
      "Content-Type": "application/json",
      // <-- Additional headers like 'Authorization' would go here
      "X-Hasura-Admin-Secret": "aFyrZOSGqAj2Eob5lNWz",
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
