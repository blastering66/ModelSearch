import {StyleSheet} from 'react-native';
import {WHITE} from '../utils/Colors';

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: WHITE,
  },
  abs_full: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
