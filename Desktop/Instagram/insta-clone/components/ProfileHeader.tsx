import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <View>
          <Text style={styles.text}>Mike_bytes</Text>
        </View>
        <View style={styles.flex1}>
          <Ionicons name="add-circle-outline" size={28} color="#000" />
          <Ionicons name="menu-outline" size={28} color="#000" />
          {/* <Ionicons name="paper-plane-outline" size={28} color="#000" /> */}
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    marginHorizontal:10
  },
  flex:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  flex1:{
    flexDirection:'row',
    gap: 15,
  },
  text:{
    fontSize:20,
    fontWeight:'bold' 
  }
});
