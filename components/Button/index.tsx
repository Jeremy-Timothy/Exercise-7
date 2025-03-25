import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, color = 'purple', onPress}) => {
  return (
    <TouchableOpacity style={styles.button(color)} onPress={onPress}>
      <Text style={styles.Txt}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    padding: 20,
    alignItems: 'center',
    borderRadius: 20,
    margin: 20,
  }),
  Txt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 500,
  },
});
