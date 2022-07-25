import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const StyledButton = (props) => {
  type=props.type;

  const content = props.content
  const onPress = props.onPress
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttoncontainer}
      onPress={() => onPress()}>
        <Text style={styles.textcontainer}
        >{content}</Text>
      </Pressable>
    </View>
  );
}

export default StyledButton;