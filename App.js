import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#34ebc9'}
          centerComponent={{
            text: 'Pocket Dictionary',
            style: { color: 'red', fontSize: 20 },
          }}
        />
        <Image
          style={styles.icon}
          source={require('Dictionary Icon.jpg')}></Image>
        <Text style={styles.imageSourceText}>image source: vectorstock.com </Text>
        <TextInput
          style={styles.inputbox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
        />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe8ea',
  },
  inputbox: {
    marginTop: 20,
    textAlign: 'center',
    width: '60%',
    height: 40,
    borderWidth: 4,
    alignSelf: 'center',
    backgroundColor: '#00f2ff',
    borderRadius: 20,
  },
  searchButton: {
    marginTop: 20,
    textAlign: 'center',
    width: '50%',
    height: 50,
    alignSelf: 'center',
    backgroundColor: 'yellow',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginLeft: 120,
  },
  imageSourceText: {
    margintop: 4,
    marginLeft:10,
    textAlign: 'center',
    fontSize: 6,
    alignSelf: 'center',
    color: 'black',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    alignSelf: 'center',
    color: 'red',
  },
});
//vectorstock.com