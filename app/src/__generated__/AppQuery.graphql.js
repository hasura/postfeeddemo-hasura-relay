/**
 * @generated SignedSource<<25787a7d6a0f4a3d0efc7610f5ddc967>>
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
    "name": "tid",
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
        "concreteType": "users",
        "kind": "LinkedField",
        "name": "users_pkey",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PostListFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
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
        "concreteType": "users",
        "kind": "LinkedField",
        "name": "users_pkey",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
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
                "name": "body",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "labels",
                "kind": "LinkedField",
                "name": "labels",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c1ba491b4b95fc9959cff99c3fa50816",
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $baseId: Int!\n) {\n  users_pkey(tid: $baseId) {\n    id\n    name\n    ...PostListFragment\n  }\n}\n\nfragment LabelsFragment on posts {\n  labels {\n    id\n    name\n  }\n}\n\nfragment PostItemFragment on posts {\n  id\n  body\n  ...LabelsFragment\n}\n\nfragment PostListFragment on users {\n  posts {\n    id\n    ...PostItemFragment\n  }\n}\n"
  }
};
})();

node.hash = "b37ec47e0aaf5aa24ef3a94b9c510db7";

module.exports = node;
