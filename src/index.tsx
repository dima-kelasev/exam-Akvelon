import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/store";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import thunk from "redux-thunk";
import looger from "redux-logger";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_rus from "./translations/rus/common.json";
import common_en from "./translations/en/common.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      common: common_en,
    },
    rus: {
      common: common_rus,
    },
  },
});

const middleware = [thunk, looger];

const persistConfig = {
  key: "TodoList",
  storage: storage,
};
const pReducer = persistReducer<any, any>(persistConfig, rootReducer);

const store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
