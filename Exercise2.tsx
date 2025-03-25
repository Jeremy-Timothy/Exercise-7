import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Exercise2 = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Biodata Mahasiswa</Text>
      </View>
      <View>
        <Image
          style={styles.profile}
          source={require('./assets/profile.png')}
        />
      </View>
      <View>
        <Text style={styles.line}>
          ------------------------------------------------------------------------
        </Text>
        <View style={styles.part1}>
          <Text>Nama: Jeremy Timothy</Text>
          <Text>Gender: Laki-Laki</Text>
          <Text>TTL: Manado, 5 September 2004</Text>
          <Text>Alamat: Tondano, Koya</Text>
          <Text>Email: j******@gmail.com</Text>
          <Text>Kewarganegaraan: Indonesia</Text>
          <Text>Agama: Kristen Protestan, GMIM</Text>
          <Text>Hobi: Gaming dan Menggambar</Text>
          <Text>
            Keahlian: Saya mungkin bisa menamakan setiap pokemon dilihat dari
            silhouete/gambar mereka saja, selain line voltorb hisui dan kanto
          </Text>
        </View>
        <Text style={styles.line}>
          ------------------------------------------------------------------------
        </Text>
        <View style={styles.part2}>
          <Text>Nama Kuliah: Universitas Klabat, Airmadidi</Text>
          <Text>Fakultas: Fakultas Ilmu Komputer - Filkom</Text>
          <Text>Jurusan: Informatika</Text>
          <Text>Semester: 6</Text>
          <Text>Tingkat: 3</Text>
        </View>
        <Text style={styles.line}>
          ------------------------------------------------------------------------
        </Text>
        <View style={styles.part3}>
          <Text>1. Apakah kita berkuliah di tempat yang sama?</Text>
          <TextInput style={styles.input} placeholder="Enter your answer..." />
          <Text>2. Apa hobi anda?</Text>
          <TextInput style={styles.input} placeholder="Enter your answer..." />
          <Text>3. Apa keahlian anda?</Text>
          <TextInput style={styles.input} placeholder="Enter your answer..." />
          <Text>4. Kapan anda lahir tahun berapa?</Text>
          <TextInput style={styles.input} placeholder="Enter your answer..." />
          <Text>5. Berasal dari manakah anda?</Text>
          <TextInput style={styles.input} placeholder="Enter your answer..." />
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.txt}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.line}>
            ------------------------------------------------------------------------
          </Text>
          <Text style={styles.gallery}>My Gallery</Text>
          <Image style={styles.img1} source={require('./assets/Catnap1.png')} />
          <Image
            style={styles.img1}
            source={require('./assets/GalacticTunes.png')}
          />
          <Image
            style={styles.img1}
            source={require('./assets/Slips-Prototype1.png')}
          />
          <Image style={styles.img1} source={require('./assets/cotl.png')} />
        </View>
        <View>
          <TouchableOpacity style={styles.closebutton} activeOpacity={0.8}>
            <Text style={styles.closetxt}>Close Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Exercise2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'navy',
    borderColor: 'black',
    borderWidth: 5,
    padding: 20,
    margin: 20,
    borderRadius: 100,
  },
  title: {
    fontSize: 50,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
  },
  profile: {
    height: 500,
    width: 300,
    margin: 60,
    padding: 10,
    borderRadius: 200,
    textAlign: 'center',
    borderWidth: 5,
    borderColor: 'navy',
  },
  line: {
    fontWeight: 'bold',
  },
  part1: {
    fontSize: 40,
    fontWeight: 'thin',
    marginTop: 10,
    fontStyle: 'italic',
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'navy',
  },
  part2: {
    fontSize: 40,
    fontWeight: 'thin',
    marginTop: 10,
    fontStyle: 'italic',
    marginLeft: 10,
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'navy',
  },
  part3: {
    fontSize: 20,
    fontWeight: 'thin',
    marginTop: 10,
    fontStyle: 'italic',
    marginLeft: 10,
    borderWidth: 2,
    marginRight: 10,
    borderColor: 'navy',
  },
  input: {
    borderWidth: 3,
    borderColor: 'navy',
    margin: 10,
    fontSize: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'navy',
    margin: 20,
    padding: 20,
    borderRadius: 50,
  },
  txt: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  closebutton: {
    backgroundColor: 'red',
    margin: 20,
    padding: 20,
    borderRadius: 50,
  },
  closetxt: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  gallery: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    color: 'navy',
  },
  img1: {
    height: 200,
    width: 200,
    margin: 20,
  },
});
