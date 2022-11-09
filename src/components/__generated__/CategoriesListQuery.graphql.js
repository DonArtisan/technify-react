/**
 * @generated SignedSource<<197f85c61e71eeecdaa729c4332dccdf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 4
      }
    ],
    "concreteType": "CategoryConnection",
    "kind": "LinkedField",
    "name": "categories",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CategoryEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              {
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 6
                  }
                ],
                "concreteType": "ProductConnection",
                "kind": "LinkedField",
                "name": "products",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "ProductEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Product",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v0/*: any*/),
                          (v1/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "description",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "currentPrice",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "products(first:6)"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": "categories(first:4)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CategoriesListQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CategoriesListQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "8aa31bf04966beca75b11ee8fadbccdb",
    "id": null,
    "metadata": {},
    "name": "CategoriesListQuery",
    "operationKind": "query",
    "text": "query CategoriesListQuery {\n  categories(first: 4) {\n    edges {\n      node {\n        id\n        name\n        products(first: 6) {\n          edges {\n            node {\n              id\n              name\n              description\n              currentPrice\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

node.hash = "d737682117d892bad3da6f22eb3600ad";

export default node;
