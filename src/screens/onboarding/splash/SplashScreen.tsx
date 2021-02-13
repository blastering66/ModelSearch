import React, {useEffect} from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {Button, BaseContainer} from '../../../components';
import baseStyle from '../../../styles/BaseStyles';
// import {Button, BaseContainer} from 'components';

interface Props {
  navigation: any;
}
const SplashScreen = ({navigation}: Props) => {
  const goToWelcome = () => {
    navigation.navigate('welcome');
  };
  useEffect(() => {
    setTimeout(() => {
      goToWelcome();
    }, 2000);
  }, []);
  return (
    <BaseContainer>
      <ImageBackground
        style={[baseStyle.root, baseStyle.abs_full]}
        source={{
          uri:
            'https://i.picsum.photos/id/5/828/1792.jpg?hmac=UiD11xUY91DPltlZ7zAec8f1rEhyUi_JcISyvXNZGLI',
        }}
      />
    </BaseContainer>
  );
};

export default SplashScreen;
