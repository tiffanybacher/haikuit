import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.scss';
import App from './components/App/App';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const app =
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>

ReactDOM.render(app, document.getElementById('root'));
