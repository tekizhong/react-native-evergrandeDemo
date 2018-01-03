import React,{ Component } from 'react';

import { View,Text } from 'react-native';

import EvergrandeView from 'react-native-evergrandeview';

export default class EvergrandeViewDemo extends Component {
    render(){
        return (
            <View>
                <EvergrandeView title = {'元旦快乐'}></EvergrandeView>
                <Text>helloworld</Text>
            </View>
        );
    }
}