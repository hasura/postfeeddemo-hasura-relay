/**
 * @generated SignedSource<<fd0401012aa1c6cf716982190dd5123c>>
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
      "args": null,
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
      "storageKey": null
    }
  ],
  "type": "posts",
  "abstractKey": null
};

node.hash = "28483b974027180d1b25834e8606e99c";

module.exports = node;
