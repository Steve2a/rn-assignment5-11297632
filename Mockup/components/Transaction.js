import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Transaction = (props) => {
  return (
    <View style={styles.TransactionCard}>
      <View style={styles.TransactionView1}>
        <View style={styles.IconContainer}>
        <Image style={styles.TransactionIcon} source={props.companyLogo} />
        </View>
        <View style={styles.TransactionText1}>
          <Text style={styles.company}>{props.companyName}</Text>
          <Text style={styles.job}>{props.Genre}</Text>
        </View>
      </View>
      <View style={styles.TransactionText2}>
        <Text style={styles.Amount}>{props.AmountPaid}</Text>
      </View>
    </View>
  )
}

export default Transaction

const styles = StyleSheet.create({

    TransactionCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '15px',
        paddingBottom: '15px',
        backgroundColor: '#fff',
        height: '60px',
        width: 'auto',
        borderRadius: '20px',
        marginBottom: '20px'
      },

      IconContainer:{
        display:'flex',
        height:'50px',
        width:'50px',
        borderRadius:'25px',
        backgroundColor:'#f3f3f3',
        alignItems:'center',
        justifyContent:'center'
    
      },
    
      TransactionIcon: {
        alignSelf: 'center'

      },
    
      TransactionView1: {
        display:'flex',
        alignItems:'center',
        flexDirection: 'row',
        gap: '15px',
      },
      TransactionText1: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingTop: '3px',
        paddingBottom: '3px'
      },
    
      job: {
        fontSize: '12px',
        fontWeight: '400',
        color: '#ODOD26',
      },
    
      company: {
        fontWeight: '600',
        fontSize: '16px',
      },
    
      TransactionText2: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        paddingTop: '3px',
        paddingBottom: '3px'
      },
    
      Amount: {
        fontSize: '18px',
        fontWeight: '600',


      },
    
      point: {
        fontWeight: '400',
        fontSize: '15px',
        color: '#ODOD26',
      },
    
    
})