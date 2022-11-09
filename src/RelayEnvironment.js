import {Environment, Network, RecordSource, Store} from 'relay-runtime'
import fetchGraphQL from './fetchGraphql'

async function fetchRelay(params, variables) {
  return fetchGraphQL(params.text, variables)
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
})
