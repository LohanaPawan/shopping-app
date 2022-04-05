import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { Rating } from 'react-native-elements'

const { height, width } = Dimensions.get('screen')

export default function Review({ data }) {
  return (
    <View style={{ flexDirection: 'row', marginTop: '7%' }}>
      <View>
        <Image
          style={{
            height: (height / 100) * 12,
            width: (width / 100) * 20,
            borderRadius: 10,

          }}
          source={require('../assets/pets.jpg')}
        />
      </View>
      <View style={{ marginLeft: '7%', justifyContent: 'space-around' }}>
        <Text style={{ fontWeight: '700', color: 'white' }}>
          {data.title}
        </Text>
        <Text style={{ fontWeight: '400', color: 'white' }}>
          {data.country}
        </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ fontWeight: '400', color: 'white', marginRight: '3%' }}>
            {data.sales} Sales
          </Text>
          <Text style={{ fontWeight: '300', color: 'white', marginRight: '3%' }}>
            |
          </Text>
          <Rating
            imageSize={20}
            defaultRating={5}
            showRating={false}
            onFinishRating={(rating) => console.log("rating ", rating)}
            style={{ paddingVertical: 10 }}
          />
          <Text style={{ fontWeight: '400', color: 'white', marginLeft: '4%' }}>
            (25)
          </Text>
        </View>
      </View>
    </View>
  )
}