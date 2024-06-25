import { StyleSheet, Text, View, ScrollView,Image} from 'react-native'
import React from 'react'
import HomeProfile from './HomeProfile'
import TransactionAction from './TransactionAction'
import Transaction from './Transaction'


const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HomeProfile />
       <Image style={styles.CardImg} source={require('../assets/Card.png')}/>

       <View style={styles.TransactionIconsContainer}>
        <TransactionAction TransactionIcon={require('../assets/send.png')} IconFunc={'Send'} />
        <TransactionAction TransactionIcon={require('../assets/recieve.png')} IconFunc={'Receive'} />
        <TransactionAction TransactionIcon={require('../assets/loan.png')} IconFunc={'Loan'} />
        <TransactionAction TransactionIcon={require('../assets/topUp.png')} IconFunc={'Topup'} />
       </View>

       <View style={styles.titleView}>
        <Text style={styles.title}>Transaction</Text>
        <Text style={styles.seeAll}>Sell all</Text>
      </View>

      <Transaction companyLogo={require('../assets/apple.png')} companyName={'Apple Store'} Genre={'Entertainment'} AmountPaid={'- $5,99'} />
      <Transaction companyLogo={require('../assets/spotify.png')} companyName={'Spotify'} Genre={'Music'} AmountPaid={'- $12,99'} />
      <Transaction companyLogo={require('../assets/moneyTransfer.png')} companyName={'Money Transfer'} Genre={'Entertainment'} AmountPaid={' $300'} />
      <Transaction companyLogo={require('../assets/grocery.png')} companyName={'Grocery'} Genre={'Entertainment'} AmountPaid={'- $88'} />
      <Transaction companyLogo={require('../assets/apple.png')} companyName={'Apple Store'} Genre={'Entertainment'} AmountPaid={'- $5,99'} />
      
    </ScrollView>

  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    padding:'20px',
    display:'flex',
    backgroundColor:'#fff'
  },

  CardImg:{
    alignSelf:'center'

  },
  TransactionIconsContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:'20px'
  },

  titleView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom:'15px'
    
  },

  title: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#0D0D26'
  },

  seeAll: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#134BDB'},


})