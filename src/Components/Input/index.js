import React from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-ionicons';
import Styles from './style';

const textInput = props => {
  //console.log(props);

  return (
    <>
      {props.name && (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{position: 'absolute', marginVertical: 25}}>
          <Icon name={props.name} />
        </View>
      )}
      <TextInput
        style={Styles.textinputstyle}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        onFocus={props.onFocus}
      />
    </>
  );
};
export default textInput;
