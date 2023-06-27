/**
 * @generated SignedSource<<3172275273f1fc8955c7a692b9e2c23e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": 3,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PostListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              }
            ],
            "kind": "FragmentSpread",
            "name": "PostListFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PostListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v4/*: any*/),
                "concreteType": "postsConnection",
                "kind": "LinkedField",
                "name": "posts_connection",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "postsEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "posts",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "title",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "starred",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "limit",
                                "value": 4
                              },
                              {
                                "kind": "Literal",
                                "name": "order_by",
                                "value": [
                                  {
                                    "created_at": "desc"
                                  },
                                  {
                                    "id": "asc"
                                  }
                                ]
                              }
                            ],
                            "concreteType": "likes",
                            "kind": "LinkedField",
                            "name": "likes",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "users",
                                "kind": "LinkedField",
                                "name": "user",
                                "plural": false,
                                "selections": [
                                  (v3/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "name",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              (v3/*: any*/)
                            ],
                            "storageKey": "likes(limit:4,order_by:[{\"created_at\":\"desc\"},{\"id\":\"asc\"}])"
                          },
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNextPage",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endCursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v4/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "PostListFragment__posts_connection",
                "kind": "LinkedHandle",
                "name": "posts_connection"
              }
            ],
            "type": "users",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "134692c24c4ac6be5e96e17d661ff873",
    "id": null,
    "metadata": {},
    "name": "PostListPaginationQuery",
    "operationKind": "query",
    "text": "query PostListPaginationQuery(\n  $count: Int = 3\n  $cursor: String\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...PostListFragment_1G22uz\n    id\n  }\n}\n\nfragment LikeUserFragment on users {\n  id\n  name\n}\n\nfragment LikesFragment on posts {\n  likes(order_by: [{created_at: desc}, {id: asc}], limit: 4) {\n    user {\n      id\n      ...LikeUserFragment\n    }\n    id\n  }\n}\n\nfragment PostItemFragment on posts {\n  id\n  title\n  ...StarFragment\n  ...LikesFragment\n}\n\nfragment PostListFragment_1G22uz on users {\n  posts_connection(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        ...PostItemFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n  id\n}\n\nfragment StarFragment on posts {\n  id\n  starred\n}\n"
  }
};
})();

node.hash = "93873eee1dcd8b5f7c6f7826aa4ebb91";

module.exports = node;
