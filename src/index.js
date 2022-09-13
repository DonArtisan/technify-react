import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Register from './pages/register/Register';
import { ChakraProvider } from '@chakra-ui/react';
import { RelayEnvironmentProvider } from 'react-relay';
import RelayEnvironment from './RelayEnvironment';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <ChakraProvider>
          <Routes>
            <Route path="/" element={<App />} />
            {/* <Route element={<Login />} path="login" /> */}
            <Route element={<Register />} path="register" />
            {/* <Route path="expenses" element={<Expenses />} /> */}
            {/* <Route path="invoices" element={<Invoices />} /> */}
          </Routes>
        </ChakraProvider>
      </RelayEnvironmentProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
