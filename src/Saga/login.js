import {delay , takeLatest , all , put , call} from 'redux-saga/effects';
import {getLoginApi} from './API';
import {updateMessage} from '../Actions'

function* workLogInAsync(action) {
    console.log('Email is:',action.payload.Email)
    console.log('Password is:',action.payload.Passowrd)
    const {payload} = action;
try {
    console.log('sddsnfjdnfj');
    
    const res = yield call(getLoginApi , payload)
    console.log('Async' , res);
    // yield put(updateMessage(res))
    
    
} catch (error) {
    console.log("Error" , error);
    
}

}

export function* watchLogIn() {
//console.log("SAGA RUNNING");

    yield takeLatest('CHECK_LOGIN' , workLogInAsync)
    
}