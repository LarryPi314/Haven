import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import * as Colors from './Colors';

export const Button = ({ title, onPress, backgroundColor, color, width, height, marginTop, marginLeft, marginRight, marginBottom }) => {
  return (
    <TouchableOpacity activeOpacity={0.85} style={[styles.button, {backgroundColor: backgroundColor, width: width, height: height, marginTop: marginTop, marginLeft: marginLeft, marginRight: marginRight, marginBottom: marginBottom}]} onPress={onPress}>
      <Text style={[styles.buttonText, {color: color}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0096FF",
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
});