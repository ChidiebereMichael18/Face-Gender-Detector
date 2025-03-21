import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const IndexHeader: React.FC = () => {
  return (
    <View style={styles.container} >
      <View style={styles.header}>
      <View>
        <Text style={styles.text}>Instagram</Text>
      </View>
        <View style={styles.nav}>
          <TouchableOpacity>
              <Ionicons name="camera-outline" size={28} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
              <Ionicons name="heart-outline" size={28} color="black" />
          </TouchableOpacity>
          <Ionicons name="chatbubble-ellipses-outline" size={28} color='black'/>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      paddingHorizontal: 20,
      paddingTop: 40,
     
     },
     header:{
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
        //  marginBottom: 20,
     },
     nav:{
      flexDirection:'row',
      gap: 15,
   },
     text:{
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Arial",
        color: "262626",
        fontStyle: "italic",
        textAlign: "center",
     }
  })
  

export default IndexHeader