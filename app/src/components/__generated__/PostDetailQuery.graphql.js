/**
 * @generated SignedSource<<24fd9d47719ad0d0ff385249763afec1>>
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
  "created_at": "desc"
},
v7 = [
  {
    "kind": "Literal",
    "name": "limit",
    "value": 4
  },
  {
    "kind": "Literal",
    "name": "order_by",
    "value": [
      (v6/*: any*/),
      {
        "id": "asc"
      }
    ]
  }
],
v8 = [
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
                "args": (v7/*: any*/),
                "concreteType": "likes",
                "kind": "LinkedField",
                "name": "likes",
                "plural": true,
                "selections": (v8/*: any*/),
                "storageKey": "likes(limit:4,order_by:[{\"created_at\":\"desc\"},{\"id\":\"asc\"}])"
              },
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
                    "value": (v6/*: any*/)
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
                    "args": (v7/*: any*/),
                    "concreteType": "comments_likes",
                    "kind": "LinkedField",
                    "name": "comments_likes",
                    "plural": true,
                    "selections": (v8/*: any*/),
                    "storageKey": "comments_likes(limit:4,order_by:[{\"created_at\":\"desc\"},{\"id\":\"asc\"}])"
                  }
                ],
                "storageKey": "comments(limit:100,order_by:{\"created_at\":\"desc\"})"
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
    "cacheID": "dd925e3c638517a6a9e6452e0b8a1000",
    "id": null,
    "metadata": {},
    "name": "PostDetailQuery",
    "operationKind": "query",
    "text": "query PostDetailQuery(\n  $postId: ID!\n) {\n  node(id: $postId) {\n    __typename\n    ... on posts {\n      id\n      title\n      body\n      created_at\n      ...StarFragment\n      ...LikesFragment\n      ...CommentsFragment\n    }\n    id\n  }\n}\n\nfragment CommentLikesFragment on comments {\n  comments_likes(order_by: [{created_at: desc}, {id: asc}], limit: 4) {\n    user {\n      id\n      ...LikeUserFragment\n    }\n    id\n  }\n}\n\nfragment CommentsFragment on posts {\n  comments(order_by: {created_at: desc}, limit: 100) {\n    id\n    body\n    ...CommentLikesFragment\n  }\n}\n\nfragment LikeUserFragment on users {\n  id\n  name\n}\n\nfragment LikesFragment on posts {\n  likes(order_by: [{created_at: desc}, {id: asc}], limit: 4) {\n    user {\n      id\n      ...LikeUserFragment\n    }\n    id\n  }\n}\n\nfragment StarFragment on posts {\n  id\n  starred\n}\n"
  }
};
})();

node.hash = "05e9bd82c5bee58aaa7903e2083b113c";

module.exports = node;
