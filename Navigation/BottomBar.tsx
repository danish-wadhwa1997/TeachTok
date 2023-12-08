import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import Discover from '../Screens/Discover/Discover';
import Activity from '../Screens/Activity/Activity';
import Profile from '../Screens/Profile/Profile';
import Bookmarks from '../Screens/Bookmarks/Bookmarks';
import Entypo from 'react-native-vector-icons/Entypo';
import FA from 'react-native-vector-icons/FontAwesome';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../assets/icons/Colors';
import {RFValue} from 'react-native-responsive-fontsize';

const Tab = createBottomTabNavigator();

function BottomBar() {
  return (
    <Tab.Navigator
      detachInactiveScreens
      initialRouteName="Home"
      screenOptions={{
        header: () => null,
        tabBarStyle: {
          backgroundColor: 'transparent',
          height: RFValue(70),
          paddingBottom: RFValue(16),
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.secondary,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => {
            return (
              <Entypo
                name="home"
                color={focused ? COLORS.primary : COLORS.secondary}
                size={RFValue(20)}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{
          title: 'Discover',
          tabBarIcon: ({focused}) => {
            return (
              <FA
                name="compass"
                color={focused ? COLORS.primary : COLORS.secondary}
                size={RFValue(23)}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          title: 'Activity',
          tabBarIcon: ({focused}) => {
            return (
              <FA5
                name="stopwatch"
                color={focused ? COLORS.primary : COLORS.secondary}
                size={RFValue(20)}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={Bookmarks}
        options={{
          title: 'Bookmarks',
          tabBarIcon: ({focused}) => {
            return (
              <FA
                name="bookmark"
                color={focused ? COLORS.primary : COLORS.secondary}
                size={RFValue(20)}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({focused}) => {
            return (
              <FA
                name="user-circle"
                color={focused ? COLORS.primary : COLORS.secondary}
                size={RFValue(20)}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomBar;
