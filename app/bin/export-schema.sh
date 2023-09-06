npm install -g get-graphql-schema
get-graphql-schema https://flexible-iguana-6068.ddn.hasura.app/graphql -h "hasura_cloud_pat=2kzOoBVNwNAy2BJqOSlTiUFCiRZboBWpV6Q4RfCTEefDwmE815aeHRkeDhG5Zv6r" > src/schema.graphql

# npm install -g graphqurl
# npm exec -- gq http://hasura:8080/v1beta1/relay -H "X-Hasura-Admin-Secret: aFyrZOSGqAj2Eob5lNWz" --introspect > src/schema.graphql