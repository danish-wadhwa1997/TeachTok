import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../../assets/icons/Colors';

const option = {id: 'A', answer: 'The Know-Nothing Party'};
const CustomButton = ({isRight, id, answer, onClick}) => {
  return (
    <View
      style={{
        padding: RFValue(16),
        backgroundColor:
          isRight === true
            ? COLORS.buttonSuccess
            : isRight === false
            ? COLORS.buttonError
            : COLORS.buttonInactive,
        borderRadius: RFValue(8),
      }}>
      <TouchableOpacity onPress={() => onClick(id)}>
        <Text
          style={{
            color: COLORS.primary,
            fontSize: RFValue(17),
            fontWeight: '500',
            textShadowColor: 'rgba(0, 0, 0, 0.45)',
            textShadowRadius: RFValue(2),
            textShadowOffset: {width: RFValue(1), height: RFValue(1.5)},
          }}>
          {answer || option.answer}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
