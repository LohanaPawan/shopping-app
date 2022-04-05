import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Feedback from '../components/Rating'
// import { Rating} from 'react-native-elements'

const data = [
  {
    name: 'Niriall',
    date: 'Dec 11, 2021',
    review: 'Beutiful quality, was a hit when I put it in a long little box like real ones as a gift!',
    linkText: 'Set of 6 Felt Macarons Dessert Catnip Cat Toy'
  },
  {
    name: 'Niriall',
    date: 'Dec 11, 2021',
    review: 'Beutiful quality, was a hit when I put it in a long little box like real ones as a gift!',
    linkText: 'Set of 6 Felt Macarons Dessert Catnip Cat Toy'
  },
  {
    name: 'Niriall',
    date: 'Dec 11, 2021',
    review: 'Beutiful quality, was a hit when I put it in a long little box like real ones as a gift!',
    linkText: 'Set of 6 Felt Macarons Dessert Catnip Cat Toy'
  },
]

export default function Reviews() {

  const renderItem = ({ item }) => (
    <Feedback
      data={item}
    />
  )
  return (
    <View style={{marginLeft: '2%', marginRight: '2%', flex: 1, marginBottom: '8%'}}>

      <FlatList
        data={data}
        renderItem={renderItem}
        style = {{
          marginTop: '10%'
        }}
      />


    </View>
  )
}