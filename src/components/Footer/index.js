import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function Footer() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <MaterialIcon name="home-filled" size={25} color="rgb(38,38,38)" />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <IonIcon name="search-outline" size={25} color="rgb(38,38,38)" />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View style={styles.new}>
          <MaterialIcon name="add" size={20} color="rgb(38,38,38)" />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <IonIcon name="heart-outline" size={25} color="rgb(38,38,38)" />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <IonIcon name="person-outline" size={25} color="rgb(38,38,38)" />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopColor: 'rgba(0, 0, 0, 0.05)',
    borderTopWidth: 1,
  },
  new: {
    borderWidth: 1.5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
