/**
 * @generated SignedSource<<da7159636cd1cd653891d8aba6a6ab4b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentsFragment",
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
      "concreteType": "comments",
      "kind": "LinkedField",
      "name": "comments",
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
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "body",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CommentLikesFragment"
        }
      ],
      "storageKey": "comments(limit:4,order_by:{\"created_at\":\"desc\"})"
    }
  ],
  "type": "posts",
  "abstractKey": null
};

node.hash = "65a4260e310c33be460ce82fd92b2931";

module.exports = node;
