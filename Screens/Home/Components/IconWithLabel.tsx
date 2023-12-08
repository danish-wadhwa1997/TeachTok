import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../../assets/icons/Colors';

const IconWithLabel = ({children, label}) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        rowGap: RFValue(4),
        alignItems: 'center',
      }}>
      {children}
      <Text
        style={{
          color: COLORS.primary,
          fontSize: RFValue(12),
          fontWeight: '500',
          letterSpacing: RFValue(-0.12),
        }}>
        {label}
      </Text>
    </View>
  );
};

export default IconWithLabel;

const styles = StyleSheet.create({});
