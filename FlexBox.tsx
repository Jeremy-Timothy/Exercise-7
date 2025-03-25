import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlexBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.redcontainer}>Flexbox</Text>
      <Text style={styles.greencontainer}>Flexbox</Text>
      <Text style={styles.bluecontainer}>Flexbox</Text>
    </View>
  );
};

export default FlexBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly', //main axis
    alignItems: 'flex-start', //cross axis
  },
  redcontainer: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  greencontainer: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
  },
  bluecontainer: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
  },
});
