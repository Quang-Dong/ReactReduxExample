/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';

const ButtonComp = ({title, onPress, bgColor}) => (
  <Button onPress={onPress} title={title} color={bgColor} />
);

export default ButtonComp;
