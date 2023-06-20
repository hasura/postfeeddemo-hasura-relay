/**
 * @generated SignedSource<<ec9f40e4d04b6fe45b3b84d27050b372>>
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
  "id": "asc"
};
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "limit",
                    "value": 100
                  },
                  {
                    "kind": "Literal",
                    "name": "order_by",
                    "value": (v4/*: any*/)
                  }
                ],
                "concreteType": "posts",
                "kind": "LinkedField",
                "name": "posts",
                "plural": true,
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
                          (v4/*: any*/)
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
                  }
                ],
                "storageKey": "posts(limit:100,order_by:{\"id\":\"asc\"})"
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
    "cacheID": "ebd4d6dd6c3c2a35fcc1f2ae3b77764a",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $baseId: ID!\n) {\n  node(id: $baseId) {\n    __typename\n    ... on users {\n      id\n      name\n      ...PostListFragment\n    }\n    id\n  }\n}\n\nfragment LikeUserFragment on users {\n  id\n  name\n}\n\nfragment LikesFragment on posts {\n  likes(order_by: [{created_at: desc}, {id: asc}], limit: 4) {\n    user {\n      id\n      ...LikeUserFragment\n    }\n    id\n  }\n}\n\nfragment PostItemFragment on posts {\n  id\n  title\n  ...StarFragment\n  ...LikesFragment\n}\n\nfragment PostListFragment on users {\n  posts(order_by: {id: asc}, limit: 100) {\n    id\n    ...PostItemFragment\n  }\n}\n\nfragment StarFragment on posts {\n  id\n  starred\n}\n"
  }
};
})();

node.hash = "597add5a5e8c8e68db27686a2092feea";

module.exports = node;
