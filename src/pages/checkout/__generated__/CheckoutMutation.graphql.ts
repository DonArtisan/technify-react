/**
 * @generated SignedSource<<2e20b9c82bd4443caf28293f5e951eb5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ClientSecretInput = {
  amount?: number | null;
  deliveryPlace?: string | null;
  products: ReadonlyArray<PaymentInput>;
};
export type PaymentInput = {
  amount?: number | null;
  currentPrice?: number | null;
  description?: string | null;
  id?: string | null;
  image?: imageType | null;
  name?: string | null;
  quantity?: number | null;
  saleId?: string | null;
  tax?: number | null;
  total?: number | null;
};
export type imageType = {
  originalSrc?: string | null;
};
export type CheckoutMutation$variables = {
  input: ClientSecretInput;
};
export type CheckoutMutation$data = {
  readonly clientSecret: {
    readonly clientSecret: string | null;
    readonly userErrors: ReadonlyArray<{
      readonly field: ReadonlyArray<string> | null;
      readonly message: string;
    } | null> | null;
  } | null;
};
export type CheckoutMutation = {
  response: CheckoutMutation$data;
  variables: CheckoutMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "ClientSecretPayload",
    "kind": "LinkedField",
    "name": "clientSecret",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientSecret",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "UserError",
        "kind": "LinkedField",
        "name": "userErrors",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "field",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "message",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CheckoutMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CheckoutMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "fb70c1eb9d67f81deddc8874dd02e64d",
    "id": null,
    "metadata": {},
    "name": "CheckoutMutation",
    "operationKind": "mutation",
    "text": "mutation CheckoutMutation(\n  $input: ClientSecretInput!\n) {\n  clientSecret(input: $input) {\n    clientSecret\n    userErrors {\n      field\n      message\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1c02f3375067f28a6adf93ce29f47c94";

export default node;
