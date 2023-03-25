/**
 * @generated SignedSource<<91086ac0ce6a4b5da59df28f551116a8>>
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
export type RegisterUserMutation$variables = {
  input: UserInput;
};
export type RegisterUserMutation$data = {
  readonly userRegister: {
    readonly user: {
      readonly id: string;
      readonly person: {
        readonly firstName: string;
        readonly lastName: string;
      } | null;
    } | null;
    readonly userErrors: ReadonlyArray<{
      readonly field: ReadonlyArray<string> | null;
      readonly message: string;
    } | null> | null;
    readonly userToken: string | null;
  } | null;
};
export type RegisterUserMutation = {
  response: RegisterUserMutation$data;
  variables: RegisterUserMutation$variables;
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
  "name": "userToken",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v6 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RegisterUserMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UserRegisterPayload",
        "kind": "LinkedField",
        "name": "userRegister",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Person",
                "kind": "LinkedField",
                "name": "person",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v6/*: any*/)
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
    "name": "RegisterUserMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UserRegisterPayload",
        "kind": "LinkedField",
        "name": "userRegister",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Person",
                "kind": "LinkedField",
                "name": "person",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d30944b246eddd98a8599e71c9dc5a64",
    "id": null,
    "metadata": {},
    "name": "RegisterUserMutation",
    "operationKind": "mutation",
    "text": "mutation RegisterUserMutation(\n  $input: UserInput!\n) {\n  userRegister(input: $input) {\n    userToken\n    user {\n      id\n      person {\n        firstName\n        lastName\n        id\n      }\n    }\n    userErrors {\n      field\n      message\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f184a9ddb1299b35a64e78beaf3410fa";

export default node;
