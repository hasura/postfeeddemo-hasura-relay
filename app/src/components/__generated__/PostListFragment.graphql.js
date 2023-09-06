/**
 * @generated SignedSource<<f53fd8005457e0de287be82604ee6a18>>
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
      "args": null,
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
      "storageKey": null
    }
  ],
  "type": "users",
  "abstractKey": null
};

node.hash = "525042ee63182a641e9f55ebafe58216";

module.exports = node;
