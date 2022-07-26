import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from './styles';

const StyledButton = (props) => {

  const type = props.type
  const content = props.content
  const onPress = props.onPress

  const textColor = type === 'primary'? '#D4D4D4' : '#3D3D3D';
  const backgroundColor = type === 'secondary'? '#D4D4D4' : '#3D3D3D';

  return (
    <View style={styles.container}>
      <Pressable style={[styles.buttoncontainer , {backgroundColor:backgroundColor}]}
      onPress={() => onPress()}>
        <Text style={[styles.textcontainer,{color: textColor}]}
        >{content}</Text>
      </Pressable>
    </View>
  );
}

export default StyledButton;