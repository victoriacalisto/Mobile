import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const signIn = () => {
      if (email === 'admin@admin.com' && password === 'admin') {
         navigation.navigate('Home');
      }
   };

   return (
      <View style={styles.container}>
         <View style={styles.headerContainer}>
            <Text style={styles.logo}>Logo da Empresa</Text>
         </View>
         <View style={styles.body}>
            <TextInput
               style={styles.input}
               placeholder="Email"
               onChangeText={setEmail}
               value={email}
            />
            <TextInput
               style={styles.input}
               placeholder="Senha"
               onChangeText={setPassword}
               value={password}
               secureTextEntry
            />
         </View>
         <View style={styles.containerButtons}>
            <Button title="Cancelar" onPress={() => { navigation.navigate('Welcome'); }} />
            <Button title="Login" onPress={signIn} />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: '#fff',
   },
   headerContainer: {
      height: '40%',
      padding: 25,
      backgroundColor: 'rgba(31, 120, 180, 1)',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
   },
   logo: {
      fontSize: 40,
      textAlign: 'center',
      fontWeight: '900',
      color: '#fff',
   },
   body: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
   },
   input: {
      width: '90%',
      height: 40,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      padding: 10,
      color: '#000'
   },
   containerButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 50,
   },
});

export default LoginScreen;
