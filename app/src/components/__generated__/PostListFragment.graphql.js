/**
 * @generated SignedSource<<777812af527a1bc41622347a2c99e429>>
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
          "value": 3
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
      "storageKey": "posts(limit:3)"
    }
  ],
  "type": "users",
  "abstractKey": null
};

node.hash = "cbb6f9202d7bb921967b599d770a8560";

module.exports = node;
