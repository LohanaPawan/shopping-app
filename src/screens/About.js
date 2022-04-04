import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
const { height, width } = Dimensions.get('screen')

export default function About() {
  return (
    <ScrollView style={{flex: 1, marginBottom: 20}}>
      <View style={{
        height: (height / 100) * 8,
        width: (width / 100) * 90,
        borderBottomWidth: 0.25,
        borderBottomColor: '#ffffff',
        marginTop: '5%'
      }}>
        <Text style={{ color: '#ffffff', fontWeight: '800', fontSize: 22 }}> About </Text>

      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}> Related links </Text>
        <Entypo
          name="chevron-small-right"
          size={25}
          color='#ffffff'
        />
      </View>

      <Text style={[styles.textStyle, {marginTop: '15%', marginBottom: '10%'}]}> Shop policies  </Text>

      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}> Shipping </Text>
        <Entypo
          name="chevron-small-right"
          size={25}
          color='#ffffff'
        />
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}> Returns and exchanges  </Text>
        <Entypo
          name="chevron-small-right"
          size={25}
          color='#ffffff'
        />
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}> Payment methods  </Text>
        <Entypo
          name="chevron-small-right"
          size={25}
          color='#ffffff'
        />
      </View>
      <Text style={{fontWeight: '400', color: 'grey', marginTop: '3%', fontSize: 18}}> Last updated on Jan 29, 2021  </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    height: (height / 100) * 9,
    width: (width / 100) * 90,
    borderBottomWidth: 0.25,
    borderBottomColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  textStyle: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 21
  }
})