import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import Auth from "./Auth";
import students from "./Student/dashboard";
import supervisors from "./supervisor/dashboard";
import { watchFetchAskuala } from "./middleware";

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: { auth: Auth, student: students, supervisor: supervisors},
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchAskuala);
