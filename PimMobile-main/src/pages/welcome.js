import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

export default function WelcomeScreen({ navigation }) {
   return (
      <View style={styles.container}>
         <Text style={styles.logo}>Logo empresa</Text>
         <View>
            <Text style={styles.welcomeText}>Bem-vindo de volta!</Text>
            <Text style={styles.access}>Acesse sua conta agora mesmo</Text>
         </View>
         <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>ENTRAR</Text>
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: 'rgba(31, 120, 180, 1)',
   },
   logo: {
      fontSize: 40,
      fontWeight: '900',
      color: '#ffffff',
      marginBottom: 40,
   },
   welcomeText: {
      fontSize: 40,
      fontWeight: '900',
      color: '#ffffff',
      marginBottom: 40,
      textAlign: 'left',
      paddingRight: 150,
   },
   access: {
      fontSize: 20,
      color: '#ffffff',
      textAlign: 'left',
   },
   button: {
      width: 200,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#007AFF',
      borderRadius: 5,
   },
   buttonText: {
      fontSize: 18,
      color: '#fff',
   },
});
