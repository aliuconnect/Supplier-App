import React,{useState} from 'react';
import {View,Text, ScrollView,Dimensions,ToastAndroid} from 'react-native';
import Styles from './style';
import Input from './../../Components/Input';
import Buton from './../../Components/Button';
import {login, updateMessage} from '../../Actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Actions} from 'react-native-router-flux';
import {Storage} from '../../Storage';


 const SignIn = props => {
const [emails , setEmail] = useState(); 
const [passwords , setPassword] = useState(); 
const {height , width} = Dimensions.get('window');


const handleEmailChange = () => {
        
        
        if(emails === '' || emails === undefined && passwords === '' || passwords === undefined ){
            ToastAndroid.show("Empty Fields" , ToastAndroid.LONG);
        }
       else{ 
           props.loginchecker({Email:emails , Passowrd:passwords})
            // const storage_Obj = new Storage();
            // storage_Obj._storeData(props.accessToken)
       }
}

    return(
    <ScrollView contentContainerStyle={{height:height,paddingVertical: 20, backgroundColor:'white',}}>    
        <View style = {Styles.container}> 
            <View style={{justifyContent:'center', alignContent:'center'}}>

                <View style={{alignItems:'center' , justifyContent:'center'}}>
                    <Text style={{fontSize:30, fontWeight:'bold' }}>SIGN IN</Text>
                </View>
              
                <View style={{justifyContent:'center' , alignItems:'center'}}>
                    <View style={{position:'relative', width: '70%'}}>

                        <Input
                            placeholder = "Email"
                            name ='person'
                            onChangeText={text => setEmail(text)}
                            onFocus={props.updateMessage}
                            />
                    
                    </View>

                    <View style={{position:'relative', width: '70%'}}>
                  

                        <Input
                            placeholder = "Password"
                            name='lock'
                            onChangeText = {(text)=>setPassword(text)}
                            secureTextEntry
                            onFocus={props.updateMessage}
                        />
                    
                    </View>
                </View>
                <View style={{marginHorizontal:130, marginTop:5, flexDirection:'row', backgroundColor:'white'}}>
                    <Text style={{color:'#9c9c9c'}}>Don't have an account? </Text>
                    <Text style={{color:'#9576ef',fontSize:15}}
                    onPress={()=>Actions.Register()}
                    > 
                    Register Here 
                    </Text>
                </View>
                <View style={{flexDirection:'column',  justifyContent:'center', alignItems:'center', }}>
                    <Buton
                    onPress={()=> handleEmailChange()}
                    >
                    <Text style={{color:'white', fontSize:18}}>LOGIN</Text>
                    </Buton>
                </View>
            </View>   
         </View>
    </ScrollView> 
    
      
    )
 
}

function mapStateToProps(state){
    console.log("State: ",state.SignIn.message)
    return {
        accessToken:state,
        message:state.SignIn.message
    }
}

function mapDispatchToProps(dispatch) {
    return{
        loginchecker:bindActionCreators(login , dispatch),
        updateMessage:bindActionCreators(updateMessage , dispatch),
    }
}
 export default connect (mapStateToProps , mapDispatchToProps) (SignIn);