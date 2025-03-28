/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Table, Row } from 'react-native-table-component';

const EmployeeScreen = ({ navigation }) => {
   const tableHead = ['Id', 'Nome', 'Sobrenome', 'CPF', 'Cargo', 'Departamento', 'Salário'];
   const tableData = [['1', 'Samuel', 'Neto', '715.788.200-06', 'Desenvolvedor', 'TI', 'R$ 2.500,00']];
   const widthArr = [40, 60, 80, 100, 120, 140, 160];

   return (
      <View style={styles.container}>
         <Text style={styles.title}>
            FUNCIONÁRIOS
         </Text>
         <ScrollView horizontal={true} style={styles.scrollView}>
            <View>
               <Table borderStyle={{ borderWidth: 1, borderColor: '#ccc' }}>
                  <Row data={tableHead} widthArr={widthArr} style={styles.header} textStyle={styles.text} />
               </Table>
               <ScrollView style={styles.dataWrapper}>
                  <Table borderStyle={{ borderWidth: 1, borderColor: '#ccc' }}>
                     {
                        tableData.map((rowData, index) => (
                           <Row
                              key={index}
                              data={rowData}
                              widthArr={widthArr}
                              style={[styles.row, index % 2 && { backgroundColor: '#fff' }]}
                              textStyle={styles.text}
                           />
                        ))
                     }
                  </Table>
               </ScrollView>
            </View>
         </ScrollView>
         <View style={styles.body}>
            <Button style={styles.buttonMenu} labelStyle={{ fontSize: 20, color: '#701078' }} mode="contained" onPress={() => { navigation.navigate('RegisterEmployee'); }}>
               Cadastrar
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
   header: { height: 50, backgroundColor: '#537791' },
   text: { textAlign: 'center', fontWeight: '100', color: '#000' },
   dataWrapper: { marginTop: -1 },
   row: { height: 40, backgroundColor: '#E7E6E1' },
   scrollView: {
      padding: 5,
   },
});

export default EmployeeScreen;
