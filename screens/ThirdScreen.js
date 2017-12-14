import React from 'react';
import {
    Text,
    View,
    Button,
    TouchableHighlight,
    Image,
    StyleSheet,
    AppRegistry,
    WebView,
    Platform
    
} from 'react-native'

import {StackNavigator} from 'react-navigation'
import Video from 'react-native-video'

export default class ThirdScreen extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'Third',
    };

    render(){
        var {navigate} = this.props.navigation;
        return(
            <View>
                <Text> This is the third page</Text> 


                
{/* 
                <Video   
                    //repeat
                    //source={require("./background")}
                    source = {{uri: "testVideo", mainVer: 1, patchVer: 0}}
                    

                    style = {styles.backgroundVideo}              
                     rate={1.0}                              // 0 is paused, 1 is normal.
                     volume={1.0}                            // 0 is muted, 1 is normal.
                     muted={false}                           // Mutes the audio entirely.
                     paused={false}                          // Pauses playback entirely.
                     resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                     repeat={true}                           // Repeat forever.
                     playInBackground={false}                // Audio continues to play when app entering background.
                     playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                    // ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                    // progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                    // onLoadStart={this.loadStart}            // Callback when video starts to load
                    // onLoad={this.setDuration}               // Callback when video loads
                    // onProgress={this.setTime}               // Callback every ~250ms with currentTime
                    // onEnd={this.onEnd}                      // Callback when playback finishes
                    // onError={this.videoError}               // Callback when video cannot be loaded
                    // onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    // onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
                    //this.player.presentFullScreen() 
                    
                    /> */}

                       

            

                 

        </View>
        )
    }
}

const styles = StyleSheet.create({
    textPosition: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container:{
        flex:1,
        flexDirection:'row',
    },
    preview:{
        flex:1,
        justifyContent:'flex-end',
        alignItems: 'center'
    },
    capture:{
        flex:0,
        backgroundColor:'#fff',
        borderRadius:5,
        color: '#000',
        padding:10,
        margin: 40
    },

    backgroundVideo: {
       position: 'absolute',
        top: 0,
        left: 0,
        bottom: -250,
        right: 0,
      },

      WebViewContainer: {    
         marginTop: (Platform.OS == 'ios') ? 20 : 0,
        }
})