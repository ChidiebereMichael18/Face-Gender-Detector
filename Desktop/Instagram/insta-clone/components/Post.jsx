import React,{useState} from "react";
import { View, Text, Image,TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'


const Post = ({post}) => {
  const [liked, setLiked] = useState(false);
  const [BookMarked, setBookMarked] = useState(false);
  return (
    <View style={styles.postContainer}>
      {/* --- Header (Username & Verification) --- */}
      <View style={styles.postHeader}>
        <View style={styles.header}>
          <Image source={{ uri: post.profilePic }} style={styles.profilePic} />
          <Text style={styles.username}>{post.username}</Text>
          {post.isVerified && <Ionicons name="checkmark-circle" size={16} color="#3498db" />}
        </View>
        <View>
          <Ionicons name="ellipsis-horizontal" size={24} color="#000" />
        </View>
      </View>

      {/* --- Post Image --- */}
      <Image source={{ uri: post.image }} style={styles.postImage} />
      {/* comment share and bookmarks */}
      <View style={styles.icon}>
        <View style={styles.icons}>
            <TouchableOpacity onPress={() => setLiked(!liked)}>
              <Ionicons name= {liked ? 'heart' : 'heart-outline'} size={24} color={liked ? 'red' : 'black'} />
            </TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={24} color="#000" />
            <Ionicons name="paper-plane-outline" size={24} color="#000" />
        </View> 
        <View>
          <TouchableOpacity onPress={() => setBookMarked(!BookMarked)}>
            <Ionicons name= {BookMarked ? 'bookmark' : 'bookmark-outline'} size={24} color={BookMarked ? 'black': 'black'}  />
          </TouchableOpacity>
        </View>
      </View>
      {/* --- Footer (Likes & Caption) --- */}
      <View style={styles.footer}>
        <Text style={styles.likes}>{post.likes}</Text>
        <Text style={styles.caption}>
          <Text style={styles.boldText}>{post.username}</Text> {post.caption}
        </Text>
      </View>     
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 20,
    // backgroundColor: "#fff",
    // paddingBottom: 10,
    // borderBottomWidth: 0.5,
    // borderBottomColor: "#ccc",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  postHeader:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight:10
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginRight: 5,
  },
  postImage: {
    width: "100%",
    height: 400,
  },
  footer: {
    padding: 10,
  },
  likes: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  caption: {
    paddingTop:5,
    fontSize: 14,
    color: "#000",
  },
  boldText: {
    fontWeight: "bold",
  },
  icon:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal:10
  },
  icons:{
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    paddingTop:10,
    gap: 15,
  }
});

export default Post;
