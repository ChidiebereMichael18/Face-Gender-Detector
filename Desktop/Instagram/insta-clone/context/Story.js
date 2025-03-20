import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Story = ({ story }) => {
  return (
    <View style={styles.storyContainer}>
      <Image source={{ uri: story.image }} style={styles.storyImage} />
      <Text style={styles.storyText}>{story.username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    alignItems: "center",
    marginHorizontal: 12,
  },
  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: "#ff8501", // Instagram-style border
  },
  storyText: {
    color: "#000",
    fontSize: 12,
    marginTop: 5,
  },
});

export default Story;
