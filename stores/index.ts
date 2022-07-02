import { enableStaticRendering } from "mobx-react";

const isServer = typeof window === "undefined";

// eslint-disable-next-line react-hooks/rules-of-hooks
enableStaticRendering(isServer);

export class Store {
  hydrate = (data: any) => {
    if (!data) {
      return;
    }
  };
}

let store: Store;

const initializeStore = (initialState = {}) => {
  const _store = store ?? new Store();

  if (initialState) {
    _store.hydrate(initialState);
  }

  if (isServer) {
    return _store;
  }

  if (!store) {
    store = _store;
  }

  return _store;
};

export const createStore = (initialState = {}) => {
  const store = initializeStore(initialState);
  return store;
};
