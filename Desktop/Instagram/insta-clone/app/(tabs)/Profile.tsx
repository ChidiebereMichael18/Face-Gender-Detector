import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProfileHeader from "@/components/ProfileHeader";

// import Post from "@/components/Post";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts"); // Default: Posts
  const posts = [
    { id: "1", image: "https://picsum.photos/101" },
    { id: "2", image: "https://picsum.photos/104" },
    { id: "3", image: "https://picsum.photos/108" },
    { id: "4", image: "https://picsum.photos/106" },
    { id: "5", image: "https://picsum.photos/109" },
    { id: "6", image: "https://picsum.photos/120" },
  ];
  return (
    <View style={styles.container}>
      <ProfileHeader />
      {/* Profile Info */}
      <View style={styles.profileHeader}>
        <View>
          <Image
            source={{ uri: "https://picsum.photos/100" }}
            style={styles.profileImage}
          />
        </View>
        <View>
          <View>
            <Text style={styles.text}>RealLife_Eren</Text>
          </View>
          <View style={styles.fol}>
            <View style={styles.stats}>
              <Text style={styles.statNumber}>0</Text>
              <Text style={styles.statLabel}>posts</Text>
            </View>
            <View style={styles.stats}>
              <Text style={styles.statNumber}>150K</Text>
              <Text style={styles.statLabel}>followers</Text>
            </View>
            <View style={styles.stats}>
              <Text style={styles.statNumber}>1590</Text>
              <Text style={styles.statLabel}>following</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        {/* Bio */}
        <Text style={styles.bio}>
          🚀React and React Native Developer | Tech Blogger.
        </Text>
      </View>
      {/* edit profile */}
      <View style={styles.edit}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.pro}>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.pro}>share profile</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person" size={22} color="#000" style={styles.add} />
        </TouchableOpacity>
      </View>
      {/* post and repost icons */}
      <View style={styles.repost}>
        <TouchableOpacity
          onPress={() => setActiveTab("posts")}
          style={styles.tab}
        >
          <Ionicons
            name="grid-outline"
            size={30}
            color={activeTab === "posts" ? "#000" : "#aaa"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setActiveTab("reposts")}
          style={styles.tab}
        >
          <Ionicons
            name="repeat-outline"
            size={30}
            color={activeTab === "posts" ? "#000" : "#aaa"}
          />
        </TouchableOpacity>
      </View>
      {/* Post Grid */}
      {/* <FlatList
      style={styles.post}
        data={posts}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.postImage} />
        )}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  profileHeader: {
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
    gap:40,
    marginHorizontal: 10,
    marginTop: 30,
  },
  fol:{
    flexDirection:'row'
  },
  profileImage: { width: 80, height: 80, borderRadius: 40 ,borderWidth: 3,
    borderColor: "#ff8501",},
  stats: { marginRight: 30 },
  statNumber: { fontSize: 18, fontWeight: "bold" },
  bio: { paddingTop: 20, marginHorizontal: 10 },
  statLabel: { fontSize: 14, color: "#000" },
  postImage: { width: "32%", height: 100, margin: 2, borderRadius: 5 },
  edit: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: "#f6f6f6",
    paddingVertical: 4,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  add: {
    backgroundColor: "#f6f6f6",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  pro: {
    fontWeight: "bold",
  },
  post: {
    marginTop: 20,
  },
  tab: { alignItems: "center", paddingVertical: 10, flex: 1 },
  repost: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "center",
    gap: 130,
    paddingHorizontal: 50,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  text:{
    fontSize:14,
    fontWeight:'bold' ,
    paddingBottom:6
    // fontStyle:'italic'  
  }
});

export default Profile;
