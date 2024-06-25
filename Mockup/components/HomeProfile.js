import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const HomeProfile = () => {
  return (
    <View style={styles.ProfileView}>
        <View style={styles.ProfileView1}>
        <View style={styles.ProfileImg}>
            <Image source={require('../assets/profile.png')}  />
        </View>
        <View style={styles.ProfileText}>
            <Text style={styles.ProfileText1}>Welcome back,</Text>
            <Text style={styles.ProfileText2}>Eric Atsu</Text>
        </View>
        </View>
        <TouchableOpacity style={styles.SearchButton}>
            <Image source={require('../assets/search.png')}/>

        </TouchableOpacity>
      
    </View>
  )
}

export default HomeProfile

const styles = StyleSheet.create({

    ProfileView:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:'30px'

    },

    ProfileView1:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:'20px'

    },

    ProfileImg:{
        display:'flex',
        backgroundColor:'#f3f3f3',
        height:'50px',
        width:'50px',
        borderRadius:'30px',
        alignItems:'center',
        justifyContent:'center'
    },

    ProfileText:{
        alignItems:'flex-start',
        justifyContent:'center'
    },

    ProfileText1:{
        color:'grey',
        fontSize:'14px',
        fontWeight:'400',
    },

    ProfileText2:{
        color:'black',
        fontSize:'16px',
        fontWeight:'600',
    },

    SearchButton:{
        display:'flex',
        backgroundColor:'#f3f3f3',
        height:'40px',
        width:'40px',
        borderRadius:'20px',
         alignItems:'center',
        justifyContent:'center'

    }
})