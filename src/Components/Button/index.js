import React from 'react';
import { TouchableOpacity,Text , TouchableHighlight} from 'react-native';
import Styles from './style'


const Btn = (props) => {
    return(
        <TouchableHighlight 
        onPress={()=>props.onPress() }
        style={Styles.buttontext}
        // onPressIn={bac}
        >
        {props.children}
        </TouchableHighlight>
    )
}
export default Btn;