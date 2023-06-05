// third-party deps
import { MD2LightTheme as PaperLightTheme, MD2Theme as PaperTheme } from 'react-native-paper';
import { DefaultTheme as NavigationLightTheme, Theme as NavigationTheme } from '@react-navigation/native';

// theme type
type Theme = PaperTheme & NavigationTheme;

// theme
const appTheme: Theme = {
  ...PaperLightTheme,
  ...NavigationLightTheme,
  roundness: 10,
  colors: {
    ...PaperLightTheme.colors,
    ...NavigationLightTheme.colors,
    primary: '#fe8c00',
    accent: '#0072fe',
    background: '#ffffff',
    surface: '',
    error: '',
    text: '',
    onSurface: '',
    disabled: '',
    placeholder: '',
    backdrop: '',
    notification: '',
    tooltip: ''
  }
};

export default appTheme;
