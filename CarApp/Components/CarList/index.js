import React from 'react';
import { Text, View, FlatList, Dimensions} from 'react-native';
import CarItem from '../CarItem';
import styles from './styles';

const CarList = () => {


  return (
    <View style={styles.contaier}>
        <FlatList
            data={[
                {
                    name:'Jeep',
                    price:'from 19,000$',
                    image:require('../../assets/image5.jpg')
                },
                {
                    name:'Mini',
                    price:'from 15,000$',
                    image:require('../../assets/image3.jpg')
                },
                {
                    name:'BMW',
                    price:'from 25,000$',
                    image:require('../../assets/image2.jpg')
                },
                
            ]}
            renderItem={({item}) => <CarItem car={item}/>}
            snapToAlignment = {'start'}
            snapToInterval= {Dimensions.get('window').height}
        />

    </View>

  );
}

export default CarList;