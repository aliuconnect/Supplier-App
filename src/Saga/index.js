import {fork , all} from 'redux-saga/effects';
import { watchLogIn } from './login';

export default function* rootSaga() {
    yield all([
        fork (watchLogIn),
    ])
}