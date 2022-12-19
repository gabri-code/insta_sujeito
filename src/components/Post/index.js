import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { formatDistance, intervalToDuration } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const width = Dimensions.get('screen').width;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');
}

export default function Post({ post }) {
  const postedAt = formatDistance(post.createdAt, new Date(), {
    locale: ptBR,
  });

  return (
    <View style={styles.container}>
      <View style={styles.postHeader}>
        <View style={styles.userInfo}>
          <TouchableWithoutFeedback>
            <Image style={styles.avatar} source={{ uri: post.avatar }} />
          </TouchableWithoutFeedback>
          <Text style={styles.username}>{post.user}</Text>
          <Text style={styles.dot}>&#x2022;</Text>
          <Text style={styles.follow}>Follow</Text>
        </View>
        <TouchableOpacity>
          <MaterialIcon name="more-vert" size={25} color="rgb(38,38,38)" />
        </TouchableOpacity>
      </View>
      <Image source={{ uri: post.image }} style={styles.postImage} />
      <View style={styles.postFooter}>
        <View style={styles.footerIcons}>
          <View style={styles.rightIcons}>
            <TouchableWithoutFeedback>
              <MaterialCommunityIcon
                style={styles.icon}
                name="cards-heart-outline"
                size={28}
                color="rgb(38,38,38)"
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <MaterialCommunityIcon
                style={[styles.icon, styles.mirrorIcon]}
                name="chat-outline"
                size={28}
                color="rgb(38,38,38)"
              />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <FeatherIcon
                name="send"
                color="rgb(38,38,38)"
                size={28}
                style={styles.sendIcon}
              />
            </TouchableWithoutFeedback>
          </View>
          <TouchableWithoutFeedback>
            <MaterialCommunityIcon
              name="bookmark-outline"
              size={28}
              color="rgb(38,38,38)"
            />
          </TouchableWithoutFeedback>
        </View>
        <Text style={styles.likes}>
          {numberWithCommas(post.likes)} curtidas
        </Text>
        <Text style={styles.username}>
          {post.user} <Text style={styles.legend}>{post.legend}</Text>
        </Text>
        <Text style={styles.postedAt}>Há {postedAt}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  postHeader: {
    height: 60,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'rgba(0, 0, 0, .15)',
    marginRight: 11,
  },
  username: {
    fontSize: 14,
    color: 'rgb(38,38,38)',
    fontFamily: 'Roboto-Medium',
  },
  legend: {
    fontSize: 14,
    color: 'rgb(38,38,38)',
    fontFamily: 'Roboto-Regular',
  },
  likes: {
    fontSize: 13,
    color: 'rgb(38,38,38)',
    fontFamily: 'Roboto-Bold',
  },
  dot: {
    marginHorizontal: 5,
    color: 'rgb(38,38,38)',
  },
  follow: {
    fontFamily: 'Roboto-Medium',
    color: '#0077ff',
  },
  postImage: {
    resizeMode: 'cover',
    height: width,
  },
  postFooter: {
    padding: 10,
  },
  footerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  mirrorIcon: {
    transform: [
      {
        rotateY: '180deg',
      },
    ],
  },
  sendIcon: {
    transform: [{ rotate: '15deg' }],
  },
  postedAt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
  },
});
