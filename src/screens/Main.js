/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StatusBar, StyleSheet, SafeAreaView} from 'react-native';

import ButtonComp from './ButtonComp';
import Child from './Child';
import * as action from '../actions/rootAction';

import {connect} from 'react-redux';

const Main = (props) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Child />
      </View>
      <View style={{flex: 1, marginHorizontal: 20}}>
        <ButtonComp
          title="Increase"
          bgColor="blue"
          onPress={() => {
            props.click();
          }}
        />
        <ButtonComp
          title="Decrease"
          bgColor="orange"
          onPress={() => {
            props.decrement();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(action.counterIncrease(1)),
  decrement: () => dispatch(action.counterDecrease(1)),
  click: () => dispatch(action.click()),
});

export default connect(null, mapDispatchToProps)(Main);

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  btnStyle: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'red',
    backgroundColor: '#15c',
  },
});
