/**
 * @generated SignedSource<<7c161f188bad7fa370b2f2ef6d9211c0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "postId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "starred"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "starred",
        "variableName": "starred"
      }
    ],
    "kind": "ObjectValue",
    "name": "_set"
  },
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "postId"
      }
    ],
    "kind": "ObjectValue",
    "name": "pk_columns"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "StarMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "posts",
        "kind": "LinkedField",
        "name": "update_posts_by_pk",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "StarFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "StarMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "posts",
        "kind": "LinkedField",
        "name": "update_posts_by_pk",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "starred",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6367ea19eee45e6e31eeaf9d5c800be3",
    "id": null,
    "metadata": {},
    "name": "StarMutation",
    "operationKind": "mutation",
    "text": "mutation StarMutation(\n  $postId: Int!\n  $starred: Boolean!\n) {\n  update_posts_by_pk(pk_columns: {id: $postId}, _set: {starred: $starred}) {\n    ...StarFragment\n    id\n  }\n}\n\nfragment StarFragment on posts {\n  id\n  starred\n}\n"
  }
};
})();

node.hash = "49d73ccf75d406742ffbeb4254e5790f";

module.exports = node;
