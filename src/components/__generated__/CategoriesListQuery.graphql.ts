/**
 * @generated SignedSource<<b929c7aa7ba0b48ccf76168f5097c769>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type CategoriesListQuery$variables = {};
export type CategoriesListQuery$data = {
  readonly categories: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
        readonly products: {
          readonly edges: ReadonlyArray<{
            readonly node: {
              readonly currentPrice: number | null;
              readonly description: string;
              readonly id: string;
              readonly image: {
                readonly originalSrc: string;
              } | null;
              readonly name: string;
            };
          }>;
        } | null;
      };
    }>;
  } | null;
};
export type CategoriesListQuery = {
  response: CategoriesListQuery$data;
  variables: CategoriesListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 4
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 6
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "currentPrice",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "originalSrc",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CategoriesListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
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
                  (v1/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": (v3/*: any*/),
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
                              (v1/*: any*/),
                              (v2/*: any*/),
                              (v4/*: any*/),
                              (v5/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Image",
                                "kind": "LinkedField",
                                "name": "image",
                                "plural": false,
                                "selections": [
                                  (v6/*: any*/)
                                ],
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
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CategoriesListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
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
                  (v1/*: any*/),
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": (v3/*: any*/),
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
                              (v1/*: any*/),
                              (v2/*: any*/),
                              (v4/*: any*/),
                              (v5/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Image",
                                "kind": "LinkedField",
                                "name": "image",
                                "plural": false,
                                "selections": [
                                  (v6/*: any*/),
                                  (v1/*: any*/)
                                ],
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
    ]
  },
  "params": {
    "cacheID": "f68c5d57a323953482001d136920e46c",
    "id": null,
    "metadata": {},
    "name": "CategoriesListQuery",
    "operationKind": "query",
    "text": "query CategoriesListQuery {\n  categories(first: 4) {\n    edges {\n      node {\n        id\n        name\n        products(first: 6) {\n          edges {\n            node {\n              id\n              name\n              description\n              currentPrice\n              image {\n                originalSrc\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "3a9a5a078a7dca2d969685164bb4d41e";

export default node;
