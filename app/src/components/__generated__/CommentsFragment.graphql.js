/**
 * @generated SignedSource<<334b51a6bc36d6ce4e3baac138531be2>>
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
          "value": 100
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
      "storageKey": "comments(limit:100,order_by:{\"created_at\":\"desc\"})"
    }
  ],
  "type": "posts",
  "abstractKey": null
};

node.hash = "7fa5e4418a81217a5960cac30c0e56db";

module.exports = node;
