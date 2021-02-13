import {url} from 'inspector';
import React from 'react';
import {View, Image} from 'react-native';
import baseStyle from '../../../styles/BaseStyles';

const WelcomeScreen = () => {
  return (
    <View
      style={[
        baseStyle.root,
        {alignItems: 'center', justifyContent: 'center'},
      ]}>
      <Image style={{backgroundColor: 'red', width: 200, height: 200}} />
    </View>
  );
};

export default WelcomeScreen;
