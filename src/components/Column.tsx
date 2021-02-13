import React from 'react';
import {View} from 'react-native';

interface Props {
  style?: any;
  children?: any;
}
const Column = ({style, children}: Props) => {
  return <View style={[{flexDirection: 'column'}, style]}>{children}</View>;
};

export default Column;
