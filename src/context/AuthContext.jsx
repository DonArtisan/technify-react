import {createContext, useContext, useState} from 'react'
import {AUTH_TOKEN} from '../constants'

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

  function login(userData) {
    localStorage.setItem(AUTH_TOKEN, userData.userToken)
    setUser(userData.user)
  }

  function signin(userData) {
    localStorage.setItem(AUTH_TOKEN, userData.userToken)
    setUser(userData.user)
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
