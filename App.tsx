// third-party deps
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

// internal deps
import appTheme from './src/theme';
import AppStackNavigator from './src/navigation/AppStackNavigator';

// app entry point
export default function App() {
  return (
    <PaperProvider theme={appTheme}>
      <NavigationContainer theme={appTheme}>
        <AppStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
