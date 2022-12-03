import {createContext, useContext, useEffect, useState} from 'react'
import {AUTH_TOKEN} from '../constants'
import fetchGraphQL from '../fetchGraphql'

const AuthContext = createContext()

function AuthProvider({children}) {
  const auth = useProvideAuth()
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

function useAuth() {
  return useContext(AuthContext)
}

function useProvideAuth() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    let isMounted = true
    fetchGraphQL(`
        query ViewerQuery {
          viewer {
            person{
              firstName
              lastName
              email
            }
          }
        }`)
      .then((response) => {
        if (!isMounted) {
          return
        }
        if (response.errors) {
          return
        }
        const {viewer} = response.data
        if (viewer) {
          setUser(viewer.person)
        }
      })
      .catch((err) => {
        console.log('esto es error', err)
      })

    return () => {
      isMounted = false
    }
  }, [])

  function login(userData) {
    localStorage.setItem(AUTH_TOKEN, userData.userToken)
    setUser(userData.userAuth.person)
  }

  function signin(userData) {
    localStorage.setItem(AUTH_TOKEN, userData.userToken)
    setUser(userData.user.person)
  }

  function logout() {
    localStorage.removeItem(AUTH_TOKEN)
    setUser(null)
  }

  function currentUser(userData) {
    setUser(userData)
  }

  return {
    user,
    signin,
    logout,
    login,
    currentUser,
  }
}

export {useAuth, AuthProvider}
