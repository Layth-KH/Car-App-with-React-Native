import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CarItem from './Components/CarItem'

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
      name= {"Jeep"}
      price= {"19,000$"}
      image= {require('./assets/image5.jpg')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
});
