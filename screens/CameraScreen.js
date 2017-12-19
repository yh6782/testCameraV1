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
import Video from 'react-native-video'
import VideoPlayer from 'react-native-video-controls'
let startVideo = false;
export default class CameraScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Camera',

        tabBarIcon:({tintColor}) => (
          <Image
          source = {require('../images/testCamera.png')}
          style = {{width:12, height:12, tintColor:'white'}}>
          </Image>
        )
    };
  render() {
    return (
      <View style={styles.container}>          

            <VideoPlayer

                      resizeMode = 'contain'
                      source={{ uri: "https://vjs.zencdn.net/v/oceans.mp4" }}
                      //source={require('../videos/YJep14.m4v')}                            
                      //source={require('../videos/testVideo.mp4')}

                      ref={(ref) => {
                        this.player = ref
                      }}   

                            style = {styles.preview}
                            rate={1.0}                              // 0 is paused, 1 is normal.
                            volume={1.0}                            // 0 is muted, 1 is normal.
                            muted={false}                           // Mutes the audio entirely.
                            paused={true}                          // Pauses playback entirely.
                            resizeMode="contain"                   // Fill the whole screen at aspect ratio.*
                            repeat={true} 
                            ignoreSilentSwitch={"obey"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.

                        
                    playInBackground={false}
                    progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                    onLoadStart={this.loadStart}            // Callback when video starts to load
                    onLoad={this.setDuration}               // Callback when video loads
                    onProgress={this.setTime}               // Callback every ~250ms with currentTime
                    onEnd={this.onEnd}                      // Callback when playback finishes
                    onError={this.videoError}               // Callback when video cannot be loaded
                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
                    
                   
                    controlTimeout = {20000} // 20 seconds             
                    disableBack = {true}
                  />      

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

          </Camera>       
  
        <TouchableHighlight
          style={styles.capture} 
          onPressIn={this.takeVid.bind(this)}
          onPressOut={this.stopVid.bind(this)}
      
          >

          <Image
          source = {require('../images/testCamera.png')}
          style = {{width:30, height:30}}>
          </Image>

          
        </TouchableHighlight>

      </View>
    );
  }

  takeVid() {
    const options = {};
    //options.location = ...
    this.camera.capture({
      metadata:options,
      totalSeconds:8 //record for 8 seconds only
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
        flexDirection: 'column',
      },
      preview: {
        flex: -1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height:300,
        paddingBottom:20
      //  width:200,
     
      },
      capture: { 
        flex:0,
        backgroundColor: 'grey',
        borderRadius: 1,
       // color: 'white',
       // padding: 1,
        margin: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
       // width:260,
      // paddingLeft:120,
      },

      backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },

      cDimension: {
        height:280,
        width: 400,

      }
    });