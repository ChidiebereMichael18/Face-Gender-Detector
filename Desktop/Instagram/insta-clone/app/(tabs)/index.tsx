import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import IndexHeader from '@/components/IndexHeader'
import Stories from '@/components/Stories'
import PostFeed from '@/components/PostFeed'

const index:React.FC = () => {
  return (
    <View style={styles.container}>
      <IndexHeader />
      <Stories/>
      <PostFeed/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 20,

   }
})

export default index