import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const SCREEN_WIDTH = width < height ? width : height;
const numColumns = 2;

export const Colors = {
  black: '#000',
  dark: '#444',
  light: '#DAE1E7',
  lighter: '#F3F3F3',
  primary: '#1292B4',
  white: '#FFF',
};
