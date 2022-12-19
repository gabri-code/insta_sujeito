import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './src/components/Footer';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.timeline} />
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
