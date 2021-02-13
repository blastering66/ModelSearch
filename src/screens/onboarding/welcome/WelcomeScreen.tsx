import React from 'react';
import {View, Image, Text} from 'react-native';
import baseStyle from '../../../styles/BaseStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Column, Row, Button, Space, BaseContainer} from 'components';
import {RED} from 'utils/Colors';

const WelcomeScreen = () => {
  return (
    <BaseContainer>
      <View
        style={[
          baseStyle.root,
          baseStyle.abs_full,
          {width: '100%', height: '100%'},
        ]}>
        <Column
          style={[
            baseStyle.abs_full,
            {width: '100%', height: '100%'},
            baseStyle.centered,
          ]}>
          <Ionicons name="alert-circle-outline" size={48} color={RED} />
          <Space size={'big'} />
          <Text>Model Search Apps</Text>
        </Column>
        <View
          style={{
            padding: 20,
            justifyContent: 'flex-end',
            width: '100%',
            height: '100%',
          }}>
          <Column>
            <Button label={'LOGIN'} />
            <Space />
            <Button label={'REGISTER'} />
          </Column>
        </View>
      </View>
    </BaseContainer>
  );
};

export default WelcomeScreen;
