// import core component 'react-native'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity} from 'react-native'

// component adalah function yg return jsx
const App = () => {
  return (
    //JSX
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Basic React Native</Text>
      </View>
      <View>
        <TextInput style={styles.input} placeholder='Enter your email'/>
        <Text style={styles.titles}>This is a test.</Text>
        <Image style={styles.img1} source={require('./assets/Catnap1.png')} />
        <Text style={styles.titles}>This is a test.</Text>
        <Image style={styles.img2} source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}/>
        <Text style={styles.titles}>This is a test.</Text>
        <Image style={styles.img2} source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}/>
        <TextInput style={styles.input} placeholder='Enter your soul'/>
        <Text style={styles.titles}>This is a test.</Text>
        <Image style={styles.img2} source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}/>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.txt}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

// export component
export default App

// Styling
const styles = StyleSheet.create({
  container:{
    backgroundColor: 'navy',
    borderColor: 'black',
    borderWidth: 5,
    padding: 20,
    margin: 20,
    borderRadius: 100,
  },
  title:{
    fontSize: 50,
    fontWeight: '800',
    color: 'cyan',
    textAlign: 'center',
  },
  titles:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic'
  },
  img1:{
    height: 200,
    width: 200,
    marginLeft: 20,
  },
  img2:{
    height: 200,
    width: 200,
    marginLeft: 20,
    alignItems: 'center',
  },
  input:{
    borderWidth: 5,
    borderColor: 'black',
    margin: 20,
    fontSize: 20,
    padding: 20,
    borderRadius: 50,
  },
  button:{
    backgroundColor: 'green',
    margin: 20,
    padding: 20,
    borderRadius: 50,
  },
  txt:{
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  }
})