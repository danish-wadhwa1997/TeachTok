import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconWithLabel from './IconWithLabel';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../../assets/icons/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import FA from 'react-native-vector-icons/FontAwesome';
import FO from 'react-native-vector-icons/Fontisto';
import AD from 'react-native-vector-icons/AntDesign';
const SidePanel = () => {
  return (
    <View
      style={{
        rowGap: RFValue(16),
        padding: RFValue(16),
        alignSelf: 'flex-end',
      }}>
      <IconWithLabel label="87">
        <FA name="heart" color={COLORS.primary} size={RFValue(30)} />
      </IconWithLabel>
      <IconWithLabel label="87">
        <AD name="message1" color={COLORS.primary} size={RFValue(30)} />
      </IconWithLabel>
      <IconWithLabel label="203">
        <FA name="bookmark" color={COLORS.primary} size={RFValue(20)} />
      </IconWithLabel>
      <IconWithLabel label="17">
        <FO name="share-a" color={COLORS.primary} size={RFValue(20)} />
      </IconWithLabel>
    </View>
  );
};

export default SidePanel;

const styles = StyleSheet.create({});
