import React, { Component } from 'react';
import { 
  Platform,
  StyleSheet,
  Text,
  Image
} from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation';
import FrontPage from './screens/FrontPage'
import CameraScreen from './screens/CameraScreen'
import ThirdScreen from './screens/ThirdScreen'


//TAB NAVIGATOR 
var Navigation = TabNavigator({
  Tab1:{screen:FrontPage},
  Tab2:{screen:CameraScreen},
  Tab3:{screen:ThirdScreen}
}, {

  tabBarPosition:'bottom',
  swipeEnabled:false,
  tabBarOptions: {
    showIcon:true,  
    activeTintColor: 'white',
    activeBackgroundColor: 'white',
    inactiveTintColor:'#7f8c8d',
    inactiveBackgroundColor:'#2c3e50',
    style: { backgroundColor: '#2c3e50' },
    labelStyle: {
      frontSize:9.5,
 
    }
  }
});

export default Navigation; 
