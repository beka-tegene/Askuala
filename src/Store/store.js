import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import Auth from "./Auth";
import { watchFetchAskuala } from "./middleware";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: { auth: Auth },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchAskuala);
