/**
 * @generated SignedSource<<8402a041ddcefc1ce255703b1f278551>>
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
          "value": 50
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
      "storageKey": "posts(limit:50,order_by:{\"id\":\"asc\"})"
    }
  ],
  "type": "users",
  "abstractKey": null
};

node.hash = "6d3299b574df9f917dd9c6db9a6053c0";

module.exports = node;
