/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Button } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
   const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
         {
            data: [20, 45, 28, 80, 99, 43],
            color: 'red',
         },
      ],
   };

   const chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: '#08130D',
      backgroundGradientToOpacity: 0,
      color: () => '#1F78B4',
      strokeWidth: 2,
      barPercentage: 0.5,
      useShadowColorFromDataset: false,
   };

   const screenWidth = Dimensions.get('window').width - 75;

   return (
      <View style={styles.container}>
         <View style={styles.headerContainer}>
            <Text style={styles.logo}>MENU</Text>
            <View style={styles.containerChart}>
               <Text style={styles.chartTitle}>Gastos mensais</Text>
               <BarChart
                  data={data}
                  width={screenWidth}
                  height={220}
                  yAxisLabel="$"
                  chartConfig={chartConfig}
                  verticalLabelRotation={30}
               />
            </View>
         </View>
         <View style={styles.body}>
            <Button style={styles.buttonMenu} labelStyle={{ fontSize: 20, color: '#fff' }} mode="contained" onPress={() => { navigation.navigate('Employee'); }}>
               Funcionários
            </Button>
            <Button style={styles.buttonMenu} labelStyle={{ fontSize: 20, color: '#fff' }} mode="contained" onPress={() => { navigation.navigate('Login'); }}>
               Sair
            </Button>
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
      height: '50%',
      padding: 25,
      backgroundColor: 'rgba(31, 120, 180, 1)',
      justifyContent: 'space-around',
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
      marginBottom: 15,
   },
   chartTitle: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: '900',
      color: '#000',
      marginBottom: 15,
   },
   containerChart: {
      flex: 1,
      backgroundColor: '#fff',
      borderRadius: 15,
      padding: 5,
   },
   body: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
   },
   buttonMenu: {
      fontSize: 40,
      width: '100%',
      height: 100,
      backgroundColor: '#701078',
      marginTop: 20,
      justifyContent: 'center',
      padding: 0,
   },
});

export default HomeScreen;
