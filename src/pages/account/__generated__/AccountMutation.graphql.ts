/**
 * @generated SignedSource<<7def1e84cd0192c04fd0baaa64b6bb5b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UserInput = {
  dni?: string | null;
  email?: string | null;
  firstName?: string | null;
  homeAddress?: string | null;
  id?: string | null;
  lastName?: string | null;
  password?: string | null;
  phoneNumber?: string | null;
};
export type AccountMutation$variables = {
  input: UserInput;
};
export type AccountMutation$data = {
  readonly userUpdate: {
    readonly user: {
      readonly person: {
        readonly email: string;
        readonly firstName: string;
        readonly lastName: string;
      } | null;
    } | null;
    readonly userErrors: ReadonlyArray<{
      readonly field: ReadonlyArray<string> | null;
      readonly message: string;
    } | null> | null;
  } | null;
};
export type AccountMutation = {
  response: AccountMutation$data;
  variables: AccountMutation$variables;
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
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v5 = {
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
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AccountMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UserUpdatePayload",
        "kind": "LinkedField",
        "name": "userUpdate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Person",
                "kind": "LinkedField",
                "name": "person",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AccountMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UserUpdatePayload",
        "kind": "LinkedField",
        "name": "userUpdate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Person",
                "kind": "LinkedField",
                "name": "person",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4736b030506b7c035324467c458ac0b0",
    "id": null,
    "metadata": {},
    "name": "AccountMutation",
    "operationKind": "mutation",
    "text": "mutation AccountMutation(\n  $input: UserInput!\n) {\n  userUpdate(input: $input) {\n    user {\n      person {\n        firstName\n        lastName\n        email\n        id\n      }\n      id\n    }\n    userErrors {\n      field\n      message\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "eaae736d7b50988b2a0c565e39c63fdf";

export default node;
