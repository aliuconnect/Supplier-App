import React, {Component, useState} from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import Styles from './style';;
import Input from './../../Components/Input';;
import Buton from './../../Components/Button';;
import {Actions} from 'react-native-router-flux';

const SignUP = props => {
  const[name , setName] = useState();
  const[userName , setUserName] = useState();
  const[password , setPassword] = useState();
  const[confirmPassowrd , setConfirmPassword] = useState();


const {height , width} = Dimensions.get('window');
  return  (
    <ScrollView
      contentContainerStyle={{
        height: height,
        paddingVertical: 20,
        backgroundColor: 'white',
      }}>
      <View style={Styles.container}>
        <View style={{justifyContent: 'center', alignContent: 'center'}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>SIGN UP</Text>
          </View>

          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={{position: 'relative', width: '80%'}}>
<Input 
placeholder="Enter Your Name" 
name="person" 
onChangeText = {text=> setName(text)}
/>

                </View>
            <View style={{position: 'relative', width: '80%'}}>


                <Input

                    placeholder = "Username"
                    name="person-add"
                    onChangeText={text=>setUserName(text)}
                    />

                </View>
            <View style={{position: 'relative', width: '80%'}}>


                <Input

                    placeholder = "Password"
                    name="lock"
                    secureTextEntry
                    onChangeText={text=>setPassword(text)}
                    />

                </View>
            <View style={{position: 'relative', width: '80%'}}>
              <Input

                    placeholder = "Confirm Passowrd"
                name="lock"
                secureTextEntry
                onChangeText={text=>setConfirmPassword(text)}
              />

          </View>
          <View
            style={{marginHorizontal: 130, marginTop: 5, flexDirection: 'row'}}>
            <Text style={{color: '#9c9c9c'}}>Already a Member? </Text>
            <Text
              style={{color: '#9576ef', fontSize: 15}}
              onPress={() => Actions.Login()}>
              SignIn Here
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width:'100%',
              height:'32%'
            }}>
            <Buton>
              <Text style={{color: 'white', fontSize: 18}}>Register</Text>
            </Buton>
          </View>
        </View>

</View>
    </View>
    </ScrollView>
  )
}
export default SignUP;
