import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import styles from './styles';


const CarItem = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.carcontainer}>

            <ImageBackground
            style={styles.image}
            source={require('../../assets/image5.jpg')}
            />

            <View style={styles.titels}>    
                <Text style={styles.titel}>
                    Jeep
                </Text>
                <Text style={styles.subtitel}>
                    Price
                </Text>
            </View> 
        </View>
    </View>
  );
}

export default CarItem;