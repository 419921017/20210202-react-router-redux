const PERSIST_INIT = 'PERSIST_INIT';

export function persistStore(store) {
  let persistor = {
    ...store,
    initState() {
      store.dispatch({
        type: PERSIST_INIT,
      });
    },
  };
  return persistor;
}

export function persistReducer(persistConfig, reducers) {
  let { key, storage } = persistConfig;
  let isInited = false;
  return function (state, action) {
    switch (action.type) {
      case PERSIST_INIT:
        isInited = true;
        let value = storage.get(`persist:${key}`);
        state = JSON.parse(value);
        break;
      default:
        if (isInited) {
          state = reducers(state, action);
          storage.set(`persist:${key}`, JSON.stringify(state));
        } else {
          return reducers(state, action);
        }
    }
  };
}
