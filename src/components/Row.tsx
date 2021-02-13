import React from 'react';
import {View, ViewStyle} from 'react-native';

interface Props {
  style?: ViewStyle;
  children?: any;
}
const Row = ({style, children}: Props) => {
  return <View style={[{flexDirection: 'row'}, style]}>{children}</View>;
};

export default Row;
