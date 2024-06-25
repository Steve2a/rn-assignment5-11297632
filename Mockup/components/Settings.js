import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Settings = (SettingOption) => {
  return (
    <View>
      <Text>Settings</Text>
    <View>
      <Text>{ SettingOption }</Text>
      <Image source={require('../assets/Arrow.svg')}/>
    </View>
  
      
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})