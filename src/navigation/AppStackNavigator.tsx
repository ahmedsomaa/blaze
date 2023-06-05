// third-party deps
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// internal deps
import { ScreenOne, ScreenTwo } from '../screens';

// StackNavigator Param List
// TODO: Add your screen names here, replace undefined with screen params
export type AppStackParamList = {
  One: undefined;
  Two: undefined;
};

// application navigation stack
const AppStack = createNativeStackNavigator<AppStackParamList>();

export default function () {
  return (
    // TODO: replace with your own screens
    <AppStack.Navigator>
      <AppStack.Screen name='One' component={ScreenOne} />
      <AppStack.Screen name='Two' component={ScreenTwo} />
    </AppStack.Navigator>
  );
}
