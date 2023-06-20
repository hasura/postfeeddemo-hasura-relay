/**
 * @generated SignedSource<<ec546575fa2c3fcb44b8e4fd3db82aa9>>
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
                    "value": 30
                  },
                  {
                    "kind": "Literal",
                    "name": "order_by",
                    "value": {
                      "created_at": "desc"
                    }
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
                  }
                ],
                "storageKey": "posts(limit:30,order_by:{\"created_at\":\"desc\"})"
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
    "cacheID": "a0011c46696cc7a356fc0d4cfb0b475e",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $baseId: ID!\n) {\n  node(id: $baseId) {\n    __typename\n    ... on users {\n      id\n      name\n      ...PostListFragment\n    }\n    id\n  }\n}\n\nfragment PostItemFragment on posts {\n  id\n  title\n  ...StarFragment\n}\n\nfragment PostListFragment on users {\n  posts(order_by: {created_at: desc}, limit: 30) {\n    id\n    ...PostItemFragment\n  }\n}\n\nfragment StarFragment on posts {\n  id\n  starred\n}\n"
  }
};
})();

node.hash = "597add5a5e8c8e68db27686a2092feea";

module.exports = node;
