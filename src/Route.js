import React from 'react'
import {Scene,Router} from 'react-native-router-flux'
import SignIn from './Containers/SignIn';
import SignUp from './Containers/SignUp'

const Routes = () => {
    return(
        <Router>
            <Scene key="root">
                <Scene key="Login" component={SignIn} title="SignIn" initial hideNavBar></Scene>
                <Scene key="Register" component={SignUp} title="SignUp" hideNavBar></Scene>
            </Scene>
        </Router>
    )
}
export default Routes;