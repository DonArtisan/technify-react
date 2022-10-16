import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { AUTH_TOKEN } from './constants';
async function fetchGraphQL(params, variables) {
  console.log(variables);
  const response = await fetch('http://technify-api.test/graphql', {
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
    headers: {
      Authorization: `bearer ${AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });
  return response.json();
}
export default new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
});
