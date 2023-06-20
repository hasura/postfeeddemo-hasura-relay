/**
 * @generated SignedSource<<b4cb171f6ccfa5aaa65b8411cda24c59>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LikesFragment",
  "selections": [
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
          "value": {
            "created_at": "desc"
          }
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
              "name": "LikeUserFragment"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "likes(limit:4,order_by:{\"created_at\":\"desc\"})"
    }
  ],
  "type": "posts",
  "abstractKey": null
};

node.hash = "57cb9a737e4e36f82b8d89611bc5d30f";

module.exports = node;
