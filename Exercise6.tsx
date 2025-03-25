import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Input from './components/Input';
import Button from './components/Button';
import Title from './components/Title';

const Exercise6 = () => {
  // let title = 'Welcome!!!'; //Variabel biasa
  const [title, setTitle] = useState('Registration'); //State
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = () => {
    //title = 'Selamat Datang';
    setTitle('Registered!');
    console.log(
      '\nName:' +
        name +
        '\nUsername:' +
        username +
        '\nPassword:' +
        password +
        '\nTitle:' +
        title +
        '\nEmail:' +
        email +
        '\nAddress:' +
        address +
        '\nPhone:' +
        phone,
    );
  };

  return (
    <ScrollView>
      <Title />
      <Input
        label="Name"
        placeholder="Masukkan nama lengkap anda"
        onChangeText={e => setName(e)}
      />
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
      <Input
        label="Email"
        placeholder="Masukkan email anda"
        onChangeText={e => setEmail(e)}
      />
      <Input
        label="Address"
        placeholder="Masukkan alamat anda"
        onChangeText={e => setAddress(e)}
      />
      <Input
        label="Phone Number"
        placeholder="Masukkan nomor telepon anda"
        onChangeText={e => setPhone(e.replace(/[^0-9]/g, ''))}
        keyboardType="numeric"
        value={phone}
      />
      <Button label="Register" onPress={onSubmit} />
    </ScrollView>
  );
};

export default Exercise6;
