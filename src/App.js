/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import Route from './Route'
import {Provider} from 'react-redux'
import store from './Store'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <Provider store={store}>
  <View style={{flex:1}}>
    
    <Route/>

  </View>
  </Provider>
  );
};


export default App;
