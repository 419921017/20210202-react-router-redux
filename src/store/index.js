import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import history from './history';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose

let store = createStore(
  persistedReducer,
  componseEnhancers(
    applyMiddleware(routerMiddleware(history)),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

let persistor = persistStore(store);

window.store = store;

export { store, persistor };
