/**
 * @generated SignedSource<<bf975b0590a5e2a837ed6775bec592d9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type productsQuery$variables = {};
export type productsQuery$data = {
  readonly products: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly currentPrice: number | null;
        readonly description: string;
        readonly id: string;
        readonly name: string;
      };
    }>;
  } | null;
};
export type productsQuery = {
  response: productsQuery$data;
  variables: productsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 50
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
                "name": "name",
                "storageKey": null
              },
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
    "storageKey": "products(first:50)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "productsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "productsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "f735e6a86a24e1bc20b5d26aeeea175c",
    "id": null,
    "metadata": {},
    "name": "productsQuery",
    "operationKind": "query",
    "text": "query productsQuery {\n  products(first: 50) {\n    edges {\n      node {\n        id\n        name\n        description\n        currentPrice\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "de0844c7f7e2f54f22eb8577d77e96e6";

export default node;
