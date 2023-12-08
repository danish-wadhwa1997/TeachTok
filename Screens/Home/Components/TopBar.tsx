import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../../assets/icons/Colors';
const TopBar = ({minutes}) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: RFValue(16),
        paddingVertical: RFValue(8),
        position: 'absolute',
        top: 0,
        zIndex: 9999,
        left: 0,
        right: 0,
      }}>
      <View
        style={{
          flexDirection: 'row',
          columnGap: RFValue(4),
          alignItems: 'center',
        }}>
        <FA5 name="stopwatch" size={RFValue(20)} color={'#FFFFFF90'} />
        <Text
          style={{
            color: '#FFFFFF90',
            fontSize: RFValue(14),
            fontWeight: '400',
          }}>
          {minutes || 10}m
        </Text>
      </View>
      <View style={{marginLeft: RFValue(-16)}}>
        <Text
          style={{
            color: COLORS.primary,
            fontSize: RFValue(14),
            fontWeight: '400',
          }}>
          For You
        </Text>
        <View
          style={{
            borderBottomWidth: RFValue(4),
            borderColor: COLORS.primary,
            marginHorizontal: RFValue(10),
            marginTop: RFValue(8),
          }}></View>
      </View>
      <FA5 name="search" size={RFValue(20)} color={COLORS.primary} />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({});
