/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const RegisterEmployeeScreen = ({ navigation }) => {
   const [name, setName] = useState();
   const [surname, setSurname] = useState();
   const [cpf, setCpf] = useState();
   const [departament, setDepartament] = useState();
   const [responsibility, setResponsibility] = useState();
   const [salary, setSalary] = useState();

   return (
      <View style={styles.container}>
         <Text style={styles.title}>
            FUNCIONÁRIO
         </Text>
         <View>
            <TextInput
               label="Nome"
               value={name}
               onChangeText={text => setName(text)}
               style={styles.input}
            />
            <TextInput
               label="Sobrenome"
               value={surname}
               onChangeText={text => setSurname(text)}
               style={styles.input}
            />
            <TextInput
               label="CPF"
               value={cpf}
               onChangeText={text => setCpf(text)}
               style={styles.input}
            />
            <TextInput
               label="Departamento"
               value={departament}
               onChangeText={text => setDepartament(text)}
               style={styles.input}
            />
            <TextInput
               label="Cargo"
               value={responsibility}
               onChangeText={text => setResponsibility(text)}
               style={styles.input}
            />
            <TextInput
               label="Salário"
               value={salary}
               onChangeText={text => setSalary(text)}
               style={styles.input}
            />
         </View>
         <View style={styles.body}>
            <Button style={styles.buttonMenu} labelStyle={{ fontSize: 20, color: '#701078' }} mode="contained" onPress={() => { navigation.navigate('Employee'); }}>
               Registrar
            </Button>
         </View>
      </View >
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: 'rgba(31, 120, 180, 1)',
   },
   title: {
      fontSize: 24,
      fontWeight: '900',
      color: '#fff',
      textAlign: 'center',
      marginTop: 25,
      marginBottom: 45,
   },
   body: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
   },
   buttonMenu: {
      width: '75%',
      height: 75,
      backgroundColor: '#FFF',
      justifyContent: 'center',
      padding: 0,
      marginTop: 'auto',
   },
   input: {
      marginTop: 15,
   },
});

export default RegisterEmployeeScreen;
