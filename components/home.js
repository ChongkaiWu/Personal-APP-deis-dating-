import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import background from '../assets/background.png';


export default function hone() {

  signupPressed = ()=>{
    Alert.alert("Completed Sign Up")
  }

  loginPressed = ()=> {
    Alert.alert("Completed Login!")
  }

    return (
      <ImageBackground
        source={background}
        style={styles.background}
      >
        <View>
          <Text style={styles.text}>Deis Dating</Text>
          <Text style={styles.text}>Learn more people. Date more people.</Text>
          <TouchableOpacity 
            onPress={this.signupPressed}
          >
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.loginPressed}
          >
            <Text style={styles.login}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
      width: '100%',
      height: '100%'
    },
    text: {
      color: 'white',
      marginTop: '-25%',
      marginLeft: '20%'
    },
    signup: {
      backgroundColor: 'white',
      color: '#3A59FF',
      width: "75%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  27,
      marginTop: '70%'
    },
    login: {
      backgroundColor: '#3A59FF',
      color: 'white',
      width: "75%",
      borderRadius: 25,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: '11%',
      padding: "2%",
      fontSize:  27,
      marginTop: '10%'
    }
});