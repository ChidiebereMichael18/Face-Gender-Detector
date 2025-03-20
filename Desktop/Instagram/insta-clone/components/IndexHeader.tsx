import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const IndexHeader: React.FC = () => {
  return (
    <View style={styles.container} >
      <View style={styles.header}>
        <TouchableOpacity>
            <Ionicons name="camera-outline" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.text}>Instagram</Text>
        <Ionicons name="paper-plane-outline" size={28} color='black'/>
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