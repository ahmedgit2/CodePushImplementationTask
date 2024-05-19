import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

export const TestScreen = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Text}> {`Implementing CodePush`} </Text>
    </View>
  );
};
