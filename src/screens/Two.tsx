// third-party deps
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Button } from 'react-native';

// internal deps
import { AppStackParamList } from '../navigation/AppStackNavigator';

// screen props
type ScreenTwoProps = NativeStackScreenProps<AppStackParamList, 'Two'>;

// screen layout
export const ScreenTwo: React.FC<ScreenTwoProps> = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to screen two!</Text>
      <Button onPress={() => navigate('One')} title='Go to screen one' color='blue' />
    </View>
  );
};

// screen stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  }
});
