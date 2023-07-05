import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  LOAD_MORE_USERS_REQUEST,
  LOAD_MORE_USERS_SUCCESS,
  LOAD_MORE_USERS_FAILURE,
} from './actions';

function* fetchUsersSaga() {
  try { 
    const response = yield axios.get('https://reqres.in/api/users?page=1&per_page=4');
    console.log('Fetch Users Response:', response.data); 
    yield put({ type: FETCH_USERS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_USERS_FAILURE, payload: error.message });
  }
}

function* loadMoreUsersSaga(action) {
  const { page } = action.payload;
  try {
    const response = yield axios.get(`https://reqres.in/api/users?page=${page}&per_page=4`);
    console.log('Load More Users Response:', response.data);
    yield put({ type: LOAD_MORE_USERS_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: LOAD_MORE_USERS_FAILURE, payload: error.message });
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsersSaga);
  yield takeEvery(LOAD_MORE_USERS_REQUEST, loadMoreUsersSaga);
}

export default rootSaga;

