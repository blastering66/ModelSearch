import React from 'react';
import {View, SafeAreaView} from 'react-native';
import baseStyle from '../styles/BaseStyles';
interface Props {
  children?: any;
}
const BaseContainer = ({children}: Props) => {
  return <SafeAreaView style={baseStyle.root}>{children}</SafeAreaView>;
};

export default BaseContainer;
