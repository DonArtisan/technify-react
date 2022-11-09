import {Environment, Network, RecordSource, Store} from 'relay-runtime'
import {AUTH_TOKEN} from './constants'
async function fetchGraphQL(params, variables) {
  const accessToken = localStorage.getItem(AUTH_TOKEN)
  const headers = {'Content-Type': 'application/json'}

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`
  }

  const response = await fetch('http://technify-api.test/graphql', {
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
    headers,
    method: 'POST',
  })
  return response.json()
}
export default new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
})
