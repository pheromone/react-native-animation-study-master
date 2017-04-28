/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    DeviceEventEmitter,
} from 'react-native';

import DetailsView from './detailsView'
export default class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text onPress={()=>this.push()}>push</Text>
            </View>
        );
    }

    push = () =>{
        this.props.navigator.push({
            component:DetailsView,
            passProps:{
                callback:(msg)=>{ alert(msg) }
            }
        })
    }

    componentDidMount() {
        //收到监听
        this.listener = DeviceEventEmitter.addListener('通知名称',(e)=>{
            alert(e)
        });
    }
    componentWillUnmount(){
        // 移除监听
        this.listener.remove();
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

