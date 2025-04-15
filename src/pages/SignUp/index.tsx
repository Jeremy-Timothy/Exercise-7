import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const SignUp = () => {
  return (
    <View style={styles.pageContainer}>
      <Header title="< Sign Up" />
      <View style={styles.contentContainer}>
        <Gap height={26} />
        <View style={styles.photoContainer}>
          <Text style={styles.photoText}>Add Photo</Text>
        </View>
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  photoContainer: {
    borderRadius: 100,
    backgroundColor: '#F0F0F0',
    width: 90,
    height: 90,
    paddingTop: 168,
    paddingLeft: 135,
  },
  photoText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    textAlign: 'center',
  },
});
