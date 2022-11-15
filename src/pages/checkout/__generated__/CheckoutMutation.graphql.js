/**
 * @generated SignedSource<<8d8b2243e3665b76f1b8b704185bf033>>
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

node.hash = "1c02f3375067f28a6adf93ce29f47c94";

export default node;
