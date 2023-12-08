import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MCQComponent from './MCQComponent';
import axios from 'axios';
import TopBar from './Components/TopBar';
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  const [mcqs, setMcqs] = useState([
    {
      mcq: {
        prev: [],
        current: {},
        next: [],
      },
      answer: {prev: [], current: {}, next: []},
    },
  ]);
  const getMCQs = async () => {
    try {
      // for current
      const response = await axios.get(
        'https://cross-platform.rp.devfactory.com/for_you',
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMCQs();
  }, []);

  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <View>
      <TopBar />
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <MCQComponent item={item} index={index} />
        )}
        pagingEnabled
        keyExtractor={item => item}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
