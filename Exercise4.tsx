import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Exercise4 = () => {
  return (
    <View style={styles.container}>
      {/* atas */}
      <View style={styles.topContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>

      {/* Logo unklab */}
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/logo-with-motto-3.png')}
          style={styles.logo}
        />
      </View>

      {/* Bawah */}
      <View style={styles.bottomContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </View>
  );
};

export default Exercise4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    width: '100%',
    height: 118,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 18,
  },
  bottomContainer: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    width: '100%',
    height: 118,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  blackBox: {
    backgroundColor: 'black',
    width: 73,
    height: 73,
  },
  yellowBox: {
    backgroundColor: 'yellow',
    width: 73,
    height: 73,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 50,
  },
  logo: {
    width: 380,
    height: 190,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
