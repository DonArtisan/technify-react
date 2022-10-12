/**
 * @generated SignedSource<<123fc922ceeeeb1b2deda947a67be87d>>
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
    "concreteType": "UserRegisterPayload",
    "kind": "LinkedField",
    "name": "userRegister",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userToken",
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
    "name": "RegisterUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RegisterUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "552f0d21230f4440403d815f17ce6bf1",
    "id": null,
    "metadata": {},
    "name": "RegisterUserMutation",
    "operationKind": "mutation",
    "text": "mutation RegisterUserMutation(\n  $input: UserInput!\n) {\n  userRegister(input: $input) {\n    userToken\n  }\n}\n"
  }
};
})();

node.hash = "c6565a3d19556b8d16b91d749f15df08";

module.exports = node;
