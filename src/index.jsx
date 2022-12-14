import {ChakraProvider} from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import {RelayEnvironmentProvider} from 'react-relay'
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import {AuthProvider} from './context/AuthContext'
import './index.css'
import RelayEnvironment from './RelayEnvironment.js'
import theme from './theme'
import Layout from './components/Layout'
import {StrictMode} from 'react'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <Layout>
            <App />
          </Layout>
        </AuthProvider>
      </ChakraProvider>
    </RelayEnvironmentProvider>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
