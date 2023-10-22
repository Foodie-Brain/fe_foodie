import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App.js'
import reportWebVitals from './reportWebVitals';
import {  ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { createUploadLink } from "apollo-upload-client";

const client = new ApolloClient({
  link: createUploadLink({
    uri: 'https://be-foodie-brain-b49c609f52cc.herokuapp.com/graphql',
  }),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);

reportWebVitals();