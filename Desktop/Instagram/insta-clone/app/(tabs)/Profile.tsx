import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import ProfileHeader from "@/components/ProfileHeader";

const Profile = () => {

  return (
    <View style={styles.container}>
      <ProfileHeader/>
      {/* Profile Info */}
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://source.unsplash.com/100x100/?portrait" }}
          style={styles.profileImage}
        />
        <View style={styles.stats}>
          <Text style={styles.statNumber}>0</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statNumber}>10K</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stats}>
          <Text style={styles.statNumber}>800</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>


      {/* Post Grid */}
      {/* <FlatList
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
  container: { flex: 1, backgroundColor: "#fff", },
  profileHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between",marginHorizontal:20 },
  profileImage: { width: 80, height: 80, borderRadius: 40 },
  stats: { alignItems: "center" },
  statNumber: { fontSize: 18, fontWeight: "bold" },
  statLabel: { fontSize: 14, color: "gray" },
  postImage: { width: "32%", height: 100, margin: 2, borderRadius: 5 },
});

export default Profile;
