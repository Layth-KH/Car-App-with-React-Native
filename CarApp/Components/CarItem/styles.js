import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
    container:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    carcontainer: {
        width: '100%',
        height: Dimensions.get('window').height,
    },
    titels: {
      alignItems: 'center',
      width: '100%',
      marginTop: '35%',
    },
    titel: {
        fontSize: 35,
        fontWeight: '900',

    },
    subtitel: {
        fontSize: 20,
        color: '#D4D4D4'
    },
    buttoncontainer: {
      position: 'absolute',
      bottom: 50,
      width: '100%'
    }
    
  });
  
  export default styles;