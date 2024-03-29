import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
      borderBottomWidth: 1,
      padding: 5,
      justifyContent: 'space-around',
      alignItems: 'center',
      borderColor: '#ddd',
      position: 'relative'
  }
};

export { CardSection };
