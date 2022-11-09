import {AUTH_TOKEN} from './constants'

async function fetchGraphQL(text, variables) {
  const accessToken = localStorage.getItem(AUTH_TOKEN)

  const response = await fetch('http://technify-api.test/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  })

  // Get the response as JSON
  return await response.json()
}

export default fetchGraphQL
