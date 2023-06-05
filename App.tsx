// third-party deps
import { NavigationContainer } from '@react-navigation/native';

// internal deps
import AppStackNavigator from './src/navigation/AppStackNavigator';

// app entry point
export default function App() {
  return (
    <NavigationContainer>
      <AppStackNavigator />
    </NavigationContainer>
  );
}
