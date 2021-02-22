import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import allReducers from './reducers'
import { GlobalStyle } from './app-pages/components/styled-components/theme'


const appStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <GlobalStyle/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

