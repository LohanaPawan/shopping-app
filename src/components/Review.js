import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
const {height, width} = Dimensions.get('screen')

export default function Review({data}) {
  return (
    <View style={{flexDirection: 'row',  marginTop: '7%'}}>
     <View>
       <Image 
        style={{
          height: (height/100)* 12,
          width: (width/100)* 20,
          borderRadius: 10,
         
        }}
        source={require('../assets/pets.jpg')}
       />
     </View>
     <View style={{marginLeft: '10%', justifyContent: 'space-around'}}>
            <Text style={{fontWeight: '700', color: 'white'}}>
              {data.title}
            </Text>
            <Text style={{fontWeight: '400', color: 'white'}}>
              {data.country}
            </Text>
            <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: '400', color: 'white', marginRight: '10%'}}>
              {data.sales} Sales
            </Text>
            <Text style={{fontWeight: '300', color: 'white', marginRight: '10%'}}>
              |
            </Text>

            </View>
     </View>
    </View>
  )
}