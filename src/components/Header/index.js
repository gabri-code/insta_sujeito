import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

// Icon.loadFont();

export default function Header() {
  const handlePhoto = () => {
    alert('Vai tirar foto.');
  };

  const handleSend = () => {
    alert('Vai enviar mensagem.');
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePhoto}>
        <FeatherIcon name="camera" color="rgb(38,38,38)" size={25} />
      </TouchableWithoutFeedback>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Instagram</Text>
      </View>
      <TouchableWithoutFeedback onPress={handleSend}>
        <FeatherIcon
          name="send"
          color="rgb(38,38,38)"
          size={25}
          style={styles.sendIcon}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
  },
  titleContainer: {
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Billabong',
    fontSize: 30,
    color: 'rgb(38,38,38)',
    lineHeight: 70,
  },
  sendIcon: {
    transform: [{ rotate: '15deg' }],
  },
});
