import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {connect} from 'react-redux';

const Child = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.counter1}</Text>
    </View>
  );
};

const mapStateToProps = (state) => ({
  counter1: state.counter,
});

export default connect(mapStateToProps, null)(Child);

const styles = StyleSheet.create({
  text: {
    fontSize: 100,
    color: '#000',
  },
});
