/**
 * @generated SignedSource<<9e2a0e2470d628028cee10a8a6f2b999>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostListFragment",
  "selections": [
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
          "value": {
            "id": "asc"
          }
        }
      ],
      "concreteType": "posts",
      "kind": "LinkedField",
      "name": "posts",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PostItemFragment"
        }
      ],
      "storageKey": "posts(limit:100,order_by:{\"id\":\"asc\"})"
    }
  ],
  "type": "users",
  "abstractKey": null
};

node.hash = "6d9fcc04910be78ee710883388aaf614";

module.exports = node;
