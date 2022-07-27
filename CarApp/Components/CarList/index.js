import React from 'react';
import { Text, View } from 'react-native';
import CarItem from '../CarItem';
import styles from './styles';

const CarList = () => {
  return (
    <View style={styles.contaier}>
        <CarItem
      name= {"Jeep"}
      price= {"19,000$"}
      image= {require('../../assets/image5.jpg')}
      />
    </View>

  );
}

export default CarList;