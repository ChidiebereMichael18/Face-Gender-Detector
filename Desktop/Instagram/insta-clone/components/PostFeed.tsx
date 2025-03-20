import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Post from "./Post";

const posts = [
  {
    id: "1",
    username: "Mike Bytes",
    profilePic: "https://picsum.photos/100",
    image: "https://picsum.photos/600",
    caption: "Building cool stuff with React Native! 🚀",
    likes: 'Liked by RomanReigns and  44,699 others',
    isVerified: true,
  },
  {
    id: "2",
    username: "Jane Doe",
    profilePic: "https://picsum.photos/101",
    image: "https://picsum.photos/601",
    caption: "Exploring the world! 🌍",
    likes: 'liked by Wizkid and  1,500 others',
    isVerified: false,
  },
  {
    id: "3",
    username: "Alex Dev",
    profilePic: "https://picsum.photos/102",
    image: "https://picsum.photos/602",
    caption: "Love coding! 💻",
    likes: 'liked by Burna and  2,500 others',
    isVerified: true,
  },
  {
    id: "4",
    username: "Davido 001",
    profilePic: "https://picsum.photos/103",
    image: "https://picsum.photos/603",
    caption: "Had a fun time with belgium",
    likes: 'liked by Wizkid and 100,500 others',
    isVerified: true,
  },
  {
    id: "5",
    username: "Justin Bieber",
    profilePic: "https://picsum.photos/105",
    image: "https://picsum.photos/605",
    caption: "International baby",
    likes: 'liked by Wizkid and 100,500 others',
    isVerified: true,
  },
  {
    id: "6",
    username: "Roman Reigns",
    profilePic: "https://picsum.photos/106",
    image: "https://picsum.photos/606",
    caption: "2K25",
    likes: 'liked by MikeBytes and 500,638 others',
    isVerified: true,
  },
  {
    id: "7",
    username: "WWE",
    profilePic: "https://picsum.photos/107",
    image: "https://picsum.photos/607",
    caption: "USAAAAAA",
    likes: 'liked by RomanReigns and 4,500 others',
    isVerified: true,
  },
  {
    id: "8",
    username: "Sophia xxx",
    profilePic: "https://picsum.photos/108",
    image: "https://picsum.photos/608",
    caption: "Pay me burna boy or buy lambo",
    likes: 'liked by Akpi and 1,900 others',
    isVerified: false,
  },
  {
    id: "9",
    username: "Speed Darlington",
    profilePic: "https://picsum.photos/109",
    image: "https://picsum.photos/609",
    caption: "See yall in August",
    likes: 'liked by Sophia and 10,500 others',
    isVerified: false,
  },
  {
    id: "10",
    username: "Selena Gomez",
    profilePic: "https://picsum.photos/110",
    image: "https://picsum.photos/610",
    caption: "Hey Jessie",
    likes: 'liked by MikeBytes and 200,500 others',
    isVerified: true,
  },
];

const PostFeed = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
  },
});

export default PostFeed;
