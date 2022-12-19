import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Footer from './src/components/Footer';
import Header from './src/components/Header';
import Post from './src/components/Post';

const posts = [
  {
    _id: 1,
    user: 'biruleibe',
    avatar: 'https://i.pravatar.cc/300?img=1',
    image: 'https://loremflickr.com/1080/1080/person?lock=2',
    legend: '<3',
    likes: 3290,
    createdAt: new Date(),
  },
  {
    _id: 2,
    user: 'ana_',
    avatar: 'https://i.pravatar.cc/300?img=2',
    image: 'https://loremflickr.com/1080/1080/person?lock=3',
    legend: '<3',
    likes: 23456236,
    createdAt: new Date('2022-12-17T03:24:00'),
  },
  {
    _id: 3,
    user: 'juuuh',
    avatar: 'https://i.pravatar.cc/300?img=3',
    image: 'https://loremflickr.com/1080/1080/person?lock=4',
    legend: '<3',
    likes: 123412,
    createdAt: new Date('2022-12-01T03:24:00'),
  },
  {
    _id: 4,
    user: 'jao',
    avatar: 'https://i.pravatar.cc/300?img=4',
    image: 'https://loremflickr.com/1080/1080/person?lock=5',
    legend: '<3',
    likes: 1235414,
    createdAt: new Date('2022-11-17T03:24:00'),
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        keyExtractor={item => item._id}
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  timeline: {
    flex: 1,
  },
});
