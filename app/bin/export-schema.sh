npm install -g get-graphql-schema
get-graphql-schema "$REACT_APP_HASURA_GRAPHQL_GRAPHQL_URL" -h "hasura_cloud_pat=$REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET" > src/schema.graphql
