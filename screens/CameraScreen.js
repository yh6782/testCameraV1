/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image,
  TouchableHighlight,
} from 'react-native';
import {StackNavigator} from 'react-navigation'

import Camera from 'react-native-camera'

let startVideo = false;
export default class CameraScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Camera',

        tabBarIcon:({tintColor}) => (
          <Image
          source = {require('../images/testCamera.png')}
          style = {{width:22, height:22, tintColor:'white'}}>
          </Image>
        )
    };
  render() {
    return (
      <View style={styles.container}>
  
         <Camera 
             
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}


          aspect={Camera.constants.Aspect.fill}
          type = {Camera.constants.Type.front}
          captureMode = {Camera.constants.CaptureMode.video}
          keepAwake={true}
          >
                
          
          <TouchableHighlight
          style={styles.capture} 
          onPressIn={this.takeVid.bind(this)}
          onPressOut={this.stopVid.bind(this)}
         // underlayColor='rgba(255,255,255,1.0)'
          >

          <Image
          source = {require('../images/testCamera.png')}
          style = {{width:60, height:60}}>
          </Image>

          
          </TouchableHighlight>

          {/* <Text style={styles.capture} onPress={this.takeVid.bind(this)}> Start recording </Text>
          <Text style={styles.capture} onPress={this.stopVid.bind(this)}> Stop recording </Text> */}
          
        </Camera>


      </View>
    );
  }

  takeVid() {
    const options = {};
    //options.location = ...
    this.camera.capture({
      metadata:options
      
    })

    
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

  stopVid(){
    this.camera.stopCapture();
    //console.log(this.state.path);
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
      },
      preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
     
      },
      capture: {
        flex: 0,
        backgroundColor: 'white',
        borderRadius: 5,
        color: '#000',
        padding: 1,
        margin: 10
      }
    });