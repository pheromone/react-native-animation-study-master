/**
 * Created by shaotingzhou on 2017/4/28.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    DeviceEventEmitter,
} from 'react-native';
export default class DetailsView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text onPress={()=>this.pop()}>pop</Text>
            </View>
        );
    }

    pop = () =>{
        let value = '监听'   //准备一个值
        DeviceEventEmitter.emit('通知名称',value); //发监听
        this.props.navigator.pop({
        })
        if(this.props.callback){
            this.props.callback('回调')
        }
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

