import React,{ Component } from 'react';
import { 
    Text,
    View,
    StyleSheet
 } from 'react-native';

import PropTypes from 'prop-types';


export default class EvergrandeView extends Component {
    render(){
        const {textStyle} = this.props;
        return (
           <View style={{justifyContent:'center'}}>
              <Text style={[styles.text,textStyle]}>{this.props.title}</Text>
          </View>
        );
    }
 }


const styles = StyleSheet.create({
    text:{
        fontSize:18,
        color:'red'
    },
 });

EvergrandeView.defaultProps = {
    title: '默认文字',
};

EvergrandeView.propTypes = {
    title:PropTypes.string,
}
