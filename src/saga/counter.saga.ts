import { takeEvery } from "redux-saga/effects";

function* handleSaga(action: any) {
  console.log("Check handle Saga!", action);
}

function* counterSaga() {
  yield takeEvery("counter/increment", handleSaga);
}

export default counterSaga;
