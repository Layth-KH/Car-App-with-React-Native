import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';


const CarItem = (props) => {

    const name=props.name
    const price=props.price
    const image=props.image

  return (
    <View style={styles.container}>
        <View style={styles.carcontainer}>

            <ImageBackground
            style={styles.image}
            source={image}
            />

            <View style={styles.titels}>    
                <Text style={styles.titel}>
                    {name}
                </Text>
                <Text style={styles.subtitel}>
                    {price}
                </Text>
            </View> 
            
            <View style={styles.buttoncontainer}>
                <StyledButton
                type = 'primary'
                content = "MORE INFO"
                onPress = {
                    () => {
                        console.warn("you will get more info")
                    }
                }
                />
                <StyledButton
                type = 'secondary'
                content = "REGISTER NOW"
                onPress = {
                    () => {
                        console.warn("you are now registered")
                    }
                }
                />
            </View>
        </View>
    </View>
  );
}

export default CarItem;