import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevtools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import App from './components/App/App';

const store = createStore(rootReducer, composeWithDevtools());

const app =
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

ReactDOM.render(app, document.getElementById('root'));
