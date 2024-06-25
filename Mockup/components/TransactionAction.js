import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const TransactionAction = (props) => {
  return (
    <View style={styles.container}>

        <TouchableOpacity style={styles.IconContainer}>
        <Image style={styles.ActionIcon} source={props.TransactionIcon}/>
        </TouchableOpacity>
        <Text style={styles.ActionText}>{ props.IconFunc }</Text>

    </View>
  )
}

export default TransactionAction

const styles = StyleSheet.create({
  container:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:'10px',
    marginTop:'30px'
  },

  IconContainer:{
    display:'flex',
    height:'60px',
    width:'60px',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:'30px',
    backgroundColor:'#f3f3f3',
  },

  ActionText:{
    fontWeight:'600',
    fontSize:'16px',
    color:'grey'

  },
})