/**
 * @generated SignedSource<<fb3407b564201b0099daabcd1ed6b2f3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentLikesFragment",
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
          "value": [
            {
              "created_at": "desc"
            },
            {
              "id": "asc"
            }
          ]
        }
      ],
      "concreteType": "comments_likes",
      "kind": "LinkedField",
      "name": "comments_likes",
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
      "storageKey": "comments_likes(limit:4,order_by:[{\"created_at\":\"desc\"},{\"id\":\"asc\"}])"
    }
  ],
  "type": "comments",
  "abstractKey": null
};

node.hash = "9e62a8a84ab0d1e43e8872e130a752c6";

module.exports = node;
