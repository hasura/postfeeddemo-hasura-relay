/**
 * @generated SignedSource<<b4d6c23e70d74895ccab14c9f2685211>>
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
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "postId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "body",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "created_at",
  "storageKey": null
},
v6 = {
  "kind": "Literal",
  "name": "limit",
  "value": 4
},
v7 = {
  "created_at": "desc"
},
v8 = [
  (v6/*: any*/),
  {
    "kind": "Literal",
    "name": "order_by",
    "value": [
      (v7/*: any*/),
      {
        "id": "asc"
      }
    ]
  }
],
v9 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "users",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      (v2/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  (v2/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PostDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "StarFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "LikesFragment"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CommentsFragment"
              }
            ],
            "type": "posts",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "query_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PostDetailQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "starred",
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v8/*: any*/),
                "concreteType": "likes",
                "kind": "LinkedField",
                "name": "likes",
                "plural": true,
                "selections": (v9/*: any*/),
                "storageKey": "likes(limit:4,order_by:[{\"created_at\":\"desc\"},{\"id\":\"asc\"}])"
              },
              {
                "alias": null,
                "args": [
                  (v6/*: any*/),
                  {
                    "kind": "Literal",
                    "name": "order_by",
                    "value": (v7/*: any*/)
                  }
                ],
                "concreteType": "comments",
                "kind": "LinkedField",
                "name": "comments",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": (v8/*: any*/),
                    "concreteType": "comments_likes",
                    "kind": "LinkedField",
                    "name": "comments_likes",
                    "plural": true,
                    "selections": (v9/*: any*/),
                    "storageKey": "comments_likes(limit:4,order_by:[{\"created_at\":\"desc\"},{\"id\":\"asc\"}])"
                  }
                ],
                "storageKey": "comments(limit:4,order_by:{\"created_at\":\"desc\"})"
              }
            ],
            "type": "posts",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "76a87a9c5399e03a653b4d2d38cbed3e",
    "id": null,
    "metadata": {},
    "name": "PostDetailQuery",
    "operationKind": "query",
    "text": "query PostDetailQuery(\n  $postId: ID!\n) {\n  node(id: $postId) {\n    __typename\n    ... on posts {\n      id\n      title\n      body\n      created_at\n      ...StarFragment\n      ...LikesFragment\n      ...CommentsFragment\n    }\n    id\n  }\n}\n\nfragment CommentLikesFragment on comments {\n  comments_likes(order_by: [{created_at: desc}, {id: asc}], limit: 4) {\n    user {\n      id\n      ...LikeUserFragment\n    }\n    id\n  }\n}\n\nfragment CommentsFragment on posts {\n  comments(order_by: {created_at: desc}, limit: 4) {\n    id\n    body\n    ...CommentLikesFragment\n  }\n}\n\nfragment LikeUserFragment on users {\n  id\n  name\n}\n\nfragment LikesFragment on posts {\n  likes(order_by: [{created_at: desc}, {id: asc}], limit: 4) {\n    user {\n      id\n      ...LikeUserFragment\n    }\n    id\n  }\n}\n\nfragment StarFragment on posts {\n  id\n  starred\n}\n"
  }
};
})();

node.hash = "05e9bd82c5bee58aaa7903e2083b113c";

module.exports = node;
