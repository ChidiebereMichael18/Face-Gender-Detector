import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Story from "@/context/Story";

const stories = [
  { id: "1", username: "My story", image: "https://picsum.photos/200" },
  { id: "2", username: "Tunde ednut", image: "https://picsum.photos/201" },
  { id: "3", username: "Davido", image: "https://picsum.photos/202" },
  { id: "4", username: "Wizkid", image: "https://picsum.photos/203" },
  { id: "5", username: "Burna", image: "https://picsum.photos/204" },
  { id: "6", username: "Snoop", image: "https://picsum.photos/205" },
  { id: "7", username: "Sophia", image: "https://picsum.photos/206" },
  { id: "8", username: "Cubana CP", image: "https://picsum.photos/207" },
  { id: "9", username: "Obi Cubana", image: "https://picsum.photos/208" },
  { id: "10", username: "Henry xxx", image: "https://picsum.photos/209" },
  { id: "11", username: "Richard xx", image: "https://picsum.photos/210" },
  { id: "12", username: "Kira Kosarin", image: "https://picsum.photos/211" },
  { id: "13", username: "Diego Valequez", image: "https://picsum.photos/212" },
  { id: "14", username: "The Chi", image: "https://picsum.photos/213" },

];

const Stories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        renderItem={({ item }) => <Story story={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    // backgroundColor: "#000",
  },
});

export default Stories;
