import React from 'react';
import {
    Text,
    View,
    Button,
    TouchableHighlight,
    Image,
    StyleSheet,
    AppRegistry,
    
} from 'react-native'

import {StackNavigator} from 'react-navigation'

export default class FrontPage extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'First',

    };

    render(){
        var {navigate} = this.props.navigation;
        return(
            <View>
                <Text> This is the first page </Text> 
                <Image
                    source = {require('../images/testImage.png')}
                    style = {{width:60, height:60}}>
                </Image>


                <Text style = {styles.capture}> Boiler text </Text>

                <Text style = {styles.capture}> Boiler text </Text>

                <Text style = {styles.capture}> Boiler text </Text> 
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
        backgroundColor:'#2c3e50',
        color:'white',
        borderRadius:5,
        padding:10,
        margin: 15
    }
})