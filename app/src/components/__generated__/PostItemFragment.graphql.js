/**
 * @generated SignedSource<<733a5e81c3e016d9bf7534c475b6060d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostItemFragment",
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
      "name": "title",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "StarFragment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "LikesFragment"
    }
  ],
  "type": "posts",
  "abstractKey": null
};

node.hash = "3b6476ca5393a65d57fbd499745f3c43";

module.exports = node;
