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
  swipeEnabled:true,
  tabBarOptions: {
    showIcon:true,  
    activeTintColor: '#2c3e50',
    activeBackgroundColor: 'white',
    inactiveTintColor:'white',
    inactiveBackgroundColor:'#2c3e50',
    labelStyle: {
      frontSize:12,
      padding:0
    }
  }
});

export default Navigation; 
