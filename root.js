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
    Navigator
} from 'react-native';
import Main from './main'
export default class Root extends Component {
    render() {
        return (
            <Navigator
                style={{flex:1}}
                initialRoute={{component: Main}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}
            />
        );
    }
    configureScene(route) {
        return Navigator.SceneConfigs.PushFromRight;
    }
    renderScene(route, navigator) {
        return <route.component navigator={navigator}  {...route.passProps} />;
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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

