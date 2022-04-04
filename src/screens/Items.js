import { View, Text, Image, FlatList, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { SearchBar } from '@rneui/themed';
import Review from '../components/Review'
import Section from '../components/Section'
import Ionicons from 'react-native-vector-icons/Ionicons'
const { height, width } = Dimensions.get('screen')

const data = {
    title: "PetsPettostore",
    country: "Thailand",
    sales: 131,
    star: 5,
    reviews: 25
}

const sections = [
    {
        title: "Featured",
        items: 4
    },
    {
        title: "Food & Drink Pet Costume",
        items: 5
    },
    {
        title: "Pet",
        items: 8
    },

]

export default function Items() {

    const renderItems = ({ item }) => (
        <View style={{ marginRight: (width / 100) * 8 }}>
            <Section item={item} />

        </View>
    )
    return (
        <ScrollView style={{flex: 1, marginBottom: 100}}>
            <Image source={require('../assets/img.jpg')}
                style={{ width: '100%', height: (height / 100) * 20 }}
            />
            <Review data={data} />
            <View style={{ marginTop: '10%' }}>
                <Text style={{ fontWeight: '600', color: 'white', fontSize: 22 }}>
                    Browse by section
                </Text>
                <View style={{ marginTop: '5%', flexDirection: 'row' }}>
                    <FlatList
                        data={sections}
                        renderItem={renderItems}
                        horizontal={true}
                    />
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-around' }}>
                <SearchBar
                    round = 'true'
                    containerStyle={{ width: (width / 100) * 70}}
                    placeholder="Search all 28 items"
                />
                <View style={{
                    width: (width/100)* 15,
                    height: (height/100)* 8,
                    borderRadius: 40,
                    backgroundColor: 'grey',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Ionicons
                       name= "md-options-outline"
                       size= {35}
                       color = 'white'

                    />

                </View>
            </View>
            
        </ScrollView>
    )
}