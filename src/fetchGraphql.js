import {AUTH_TOKEN} from './constants'

async function fetchGraphQL(text, variables) {
  const accessToken = localStorage.getItem(AUTH_TOKEN)

  const response = await fetch(import.meta.env.VITE_GRAPHQL_URL, {
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

  return await response.json()
}

export default fetchGraphQL
