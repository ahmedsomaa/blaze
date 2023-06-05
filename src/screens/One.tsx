// third-party deps
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Button } from 'react-native';

// internal deps
import { AppStackParamList } from '../navigation/AppStackNavigator';

// screen props
type ScreenOneProps = NativeStackScreenProps<AppStackParamList, 'One'>;

// screen layout
export const ScreenOne: React.FC<ScreenOneProps> = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to screen one!</Text>
      <Button onPress={() => navigate('Two')} title='Go to screen two' color='green' />
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
