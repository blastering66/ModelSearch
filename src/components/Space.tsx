import React from 'react';
import {View} from 'react-native';

type sizeType = 'small' | 'normal' | 'big';
interface Props {
  size?: sizeType;
}
const Space = ({size}: Props) => {
  var sizeNum = 10;
  if (size === 'small') {
    sizeNum = 5;
  }
  if (size === 'big') {
    sizeNum = 20;
  }
  return (
    <View
      style={{
        height: sizeNum,
      }}
    />
  );
};

export default Space;
