import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import Discover from '../Screens/Discover/Discover';
import Activity from '../Screens/Activity/Activity';
import Profile from '../Screens/Profile/Profile';
import Bookmarks from '../Screens/Bookmarks/Bookmarks';

const Tab = createBottomTabNavigator();

function BottomBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Bookmarks" component={Bookmarks} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomBar;
