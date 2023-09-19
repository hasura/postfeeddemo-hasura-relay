# Hasura v3 Relay API Demo

The app loads a list of posts from a Hasura v3 Relay endpoint

The component structure, which mirrors the query structure is:
```
App (user) > PostList (posts) > PostItem (single post details) > Labels (post labels)
```

Another way to see this is to look at the single query Relay generates
```graphql
query AppQuery(
  $baseId: Int!
) {
  users_pkey(tid: $baseId) {
    id
    name
    ...PostListFragment
  }
}

fragment PostListFragment on users {
  posts {
    id
    ...PostItemFragment
  }
}

fragment PostItemFragment on posts {
  id
  body
  ...LabelsFragment
}

fragment LabelsFragment on posts {
  labels {
    id
    name
  }
}
```

## How to Run

```bash
docker compose build
docker compose up -d
docker compose exec app bash
```

```bash
# inside the app container

npm install

npm run -- relay
npm run -- start
```

Access the app from `localhost:3001`

## Customising the Relay endpoint

You can host the metadata in `hasura-metadata.json` at your own Hasura v3 endpoint

The backing schema with a few sample rows is in `schema-sample-data.sql`

Update `bin/export-schema.sh` and `RelayEnvironment.js` with your new endpoint and auth details

Run `bin/export-schema.sh` inside the container