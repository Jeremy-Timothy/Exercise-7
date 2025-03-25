import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';

const Exercise3 = () => {
  // let title = 'Welcome!!!'; //Variabel biasa
  const [title, setTitle] = useState('Welcome!!!'); //State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    //title = 'Selamat Datang';
    setTitle('Selamat Datang');
    console.log(username, password);
  };

  return (
    <ScrollView>
      <Title />
      <Input
        label="Username"
        placeholder="Masukkan username anda"
        onChangeText={e => setUsername(e)}
      />
      <Input
        label="Password"
        placeholder="Masukkan password anda"
        onChangeText={e => setPassword(e)}
        secureTextEntry={true}
      />
      <Input label="Alamat" placeholder="Masukkan alamat anda" />
      <Input label="No. Tlpn" placeholder="Masukkan nomor tlpn anda" />
      <Button label="Sign in" onPress={onSubmit} />
      <Button label="Sign in with Google" color="red" />
      <Button label="Sign in with Facebook" color="blue" />
      <Button label="Sign in with Apple" color="black" />
    </ScrollView>
  );
};

export default Exercise3;

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: '700',
    color: 'black',
    marginLeft: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  input: {
    borderWidth: 3,
    borderColor: 'grey',
    margin: 10,
    fontSize: 20,
    borderRadius: 10,
    marginLeft: 20,
  },
  button: {
    backgroundColor: 'navy',
    margin: 20,
    padding: 20,
    borderRadius: 20,
  },
  titles: {
    fontSize: 20,
    fontWeight: 'thin',
    marginTop: 15,
    marginLeft: 20,
    marginRight: 10,
  },
  txt: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 500,
  },
});
