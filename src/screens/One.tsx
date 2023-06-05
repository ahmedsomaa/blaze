// third-party deps
import React from 'react';
import { Button } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// internal deps
import { AppStackParamList } from '../navigation/AppStackNavigator';

// screen props
type ScreenOneProps = NativeStackScreenProps<AppStackParamList, 'One'>;

// screen layout
export const ScreenOne: React.FC<ScreenOneProps> = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to screen one!</Text>
      <Button mode='contained' onPress={() => navigate('Two')}>
        Go to screen two
      </Button>
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
