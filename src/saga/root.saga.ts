import { all } from "redux-saga/effects";
import counterSaga from "./counter.saga";

function* RootSaga() {
  console.log("I am Root Saga");
  yield all([counterSaga()]);
}

export default RootSaga;
