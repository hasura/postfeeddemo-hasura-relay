/**
 * @generated SignedSource<<5191d55d9bb3672f0322ac7210b85853>>
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
      "storageKey": "posts(limit:30,order_by:{\"created_at\":\"desc\"})"
    }
  ],
  "type": "users",
  "abstractKey": null
};

node.hash = "bf9585dcafe401539b05e549f281b291";

module.exports = node;
