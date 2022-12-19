import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="camera" color="#010203" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});
