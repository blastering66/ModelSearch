import React from 'react';
import {View, Text, TouchableOpacity, ViewStyle} from 'react-native';

interface Props {
  label: string;
  onPress?: (props: any) => void;
  style?: ViewStyle;
}
const Button = ({label, onPress, style}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          {
            width: '100%',
            height: 48,
            padding: 5,
            alignItems: 'center',
            backgroundColor: 'red',
            justifyContent: 'center',
            borderRadius: 5,
          },
          style,
        ]}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontFamily: 'arial',
            paddingHorizontal: 20,
          }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// interface Props {
//   label: string;
// }
// const Button = ({
//   label,
// }: Props) => {
//   return (
//     <View>
//       <Text>{label}</Text>
//     </View>
//   );
// };

export default Button;
