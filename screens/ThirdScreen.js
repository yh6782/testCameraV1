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

export default class ThirdScreen extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'Third',
    };

    render(){
        var {navigate} = this.props.navigation;
        return(
            <View>
                <Text> This is the third page </Text> 

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
    }
})