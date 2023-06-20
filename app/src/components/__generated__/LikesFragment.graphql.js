/**
 * @generated SignedSource<<52a051a0730601ab112b033c98642f47>>
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
      "storageKey": "likes(limit:4,order_by:[{\"created_at\":\"desc\"},{\"id\":\"asc\"}])"
    }
  ],
  "type": "posts",
  "abstractKey": null
};

node.hash = "ac29baf995dfb05009ed4eec8a434f68";

module.exports = node;
