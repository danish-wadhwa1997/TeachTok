/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS} from '../../assets/icons/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import MI from 'react-native-vector-icons/MaterialIcons';
import CustomButton from './Components/CustomButton';
import SidePanel from './Components/SidePanel';

const test = {
  type: 'mcq',
  id: 7627,
  playlist: 'Period 6: 1865-1898',
  description: '5.5 Sectional Conflict: Regional Differences #apush',
  image:
    'https://cross-platform-rwa.rp.devfactory.com/images/7627%20-%20The%20Know-Nothing%20Party.png',
  question: "What was the most prominent nativist group during the mid-1800's?",
  options: [
    {id: 'A', answer: 'The Know-Nothing Party'},
    {id: 'B', answer: 'The Immigrant Exclusion League'},
    {id: 'C', answer: 'The American Prosperity Group'},
  ],
  user: {
    name: 'AP US History',
    avatar: 'https://cross-platform-rwa.rp.devfactory.com/avatars/apush.png',
  },
};

const answer = {
  id: 7627,
  correct_options: [{id: 'A', answer: 'The Know-Nothing Party'}],
};

const MCQComponent = ({item, index}) => {
  const bottomBarHeight = useBottomTabBarHeight();
  console.log(bottomBarHeight);
  const [showResult, setShowResult] = useState<Number>();

  const handleOptionClick = (id: Number) => {
    setShowResult(id);
  };
  return (
    <ImageBackground
      src={test.image}
      style={{
        flex: 1,
        height: Dimensions.get('window').height - bottomBarHeight,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingTop: RFValue(64),
            flex: 1,
          }}>
          <View
            style={{
              paddingLeft: RFValue(16),
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  color: COLORS.primary,
                  backgroundColor: '#00000080',
                  borderRadius: RFValue(8),
                  padding: RFValue(8),
                  fontSize: RFValue(22),
                  fontWeight: '500',
                }}>
                {test.question}
              </Text>
            </View>
            <View style={{flexDirection: 'column', rowGap: RFValue(8)}}>
              {test?.options &&
                test?.options.length > 0 &&
                test.options.map(option => (
                  <CustomButton
                    {...option}
                    onClick={handleOptionClick}
                    isRight={
                      !showResult
                        ? null
                        : Number(showResult) === Number(answer?.id)
                        ? true
                        : false
                    }
                  />
                ))}
            </View>
            <View style={{paddingBottom: RFValue(16)}}>
              <Text
                style={{
                  color: COLORS.primary,
                  fontSize: RFValue(15),
                  fontWeight: '600',
                }}>
                {test.user.name}
              </Text>
              <Text
                style={{
                  color: COLORS.primary,
                  fontSize: RFValue(13),
                  fontWeight: '400',
                }}>
                {test.description}
              </Text>
            </View>
          </View>

          <SidePanel />
        </View>
        <View
          style={{
            backgroundColor: COLORS.secondaryBackground,
            paddingHorizontal: RFValue(16),
            paddingVertical: RFValue(16),
            flexDirection: 'row',
            columnGap: RFValue(8),
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Image
            source={require('../../assets/icons/playlist.png')}
            width={RFValue(20)}
          />
          <Text
            style={{
              color: COLORS.primary,
              fontSize: RFValue(13),
              fontWeight: '600',
            }}>
            Playlist &#x2022; {test.playlist}
          </Text>
          <View style={{marginLeft: 'auto'}}>
            <MI
              name="arrow-forward-ios"
              size={RFValue(15)}
              color={COLORS.primary}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MCQComponent;

const styles = StyleSheet.create({});
