/**
 * @generated SignedSource<<1b06b333e1176b18907c88660efc65fb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "baseId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "baseId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
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
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "PostListFragment"
              }
            ],
            "type": "users",
            "abstractKey": null
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
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": (v5/*: any*/),
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
                          (v2/*: any*/),
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
                                  (v2/*: any*/),
                                  (v3/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v2/*: any*/)
                            ],
                            "storageKey": "likes(limit:4,order_by:[{\"created_at\":\"desc\"},{\"id\":\"asc\"}])"
                          },
                          (v4/*: any*/)
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
                "storageKey": "posts_connection(first:3)"
              },
              {
                "alias": null,
                "args": (v5/*: any*/),
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
    "cacheID": "4ba51af277a242793a62fc4b49ea2c43",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $baseId: ID!\n) {\n  node(id: $baseId) {\n    __typename\n    ... on users {\n      id\n      name\n      ...PostListFragment\n    }\n    id\n  }\n}\n\nfragment LikeUserFragment on users {\n  id\n  name\n}\n\nfragment LikesFragment on posts {\n  likes(order_by: [{created_at: desc}, {id: asc}], limit: 4) {\n    user {\n      id\n      ...LikeUserFragment\n    }\n    id\n  }\n}\n\nfragment PostItemFragment on posts {\n  id\n  title\n  ...StarFragment\n  ...LikesFragment\n}\n\nfragment PostListFragment on users {\n  posts_connection(first: 3) {\n    edges {\n      node {\n        id\n        ...PostItemFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n  id\n}\n\nfragment StarFragment on posts {\n  id\n  starred\n}\n"
  }
};
})();

node.hash = "597add5a5e8c8e68db27686a2092feea";

module.exports = node;
