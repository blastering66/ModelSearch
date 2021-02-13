import React from 'react';
import {View, Image} from 'react-native';
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
  return (
    <BaseContainer>
      <View style={[baseStyle.centered]}>
        <Image
          style={baseStyle.abs_full}
          source={{
            uri:
              'https://i.picsum.photos/id/5/828/1792.jpg?hmac=UiD11xUY91DPltlZ7zAec8f1rEhyUi_JcISyvXNZGLI',
          }}
        />
        <View
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'black',
            opacity: 0.2,
          }}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button label={'CONTINUE'} onPress={goToWelcome} />
        </View>
      </View>
    </BaseContainer>
  );
};

export default SplashScreen;
