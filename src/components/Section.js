import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
const { height, width } = Dimensions.get('screen')


export default function Section({ item }) {
    return (
        <View style={{alignItems: 'center'}}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{borderRadius: 10}}>
                    <Image
                        style={{
                            height: (height / 100) * 15,
                            width: (width / 100) * 14,
                            marginRight: (width/100)*2,
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10

                        }}
                        source={require('../assets/pet1.jpg')} />
                </View>
                <View>
                <Image
                        style={{
                            height: (height / 100) * 7,
                            width: (width / 100) * 14,
                            marginBottom: (width/100)*2,
                            borderTopRightRadius: 10,
                        }}
                        source={require('../assets/pet1.jpg')} />
                          <Image
                        style={{
                            height: (height / 100) * 7,
                            width: (width / 100) * 14,
                            borderBottomRightRadius: 10

                        }}
                        source={require('../assets/pet1.jpg')} />

                </View>
            </View>

            <View style={{ alignItems: 'center', 
            alignContent: 'center',
            marginTop: (height/100)*2, width: (width/100)* 28, justifyContent: 'center'  }}>
                <Text style={{color: 'white', textAlign: 'center'}}>
                    {item.title}
                </Text>
                <Text style={{color: 'white', textAlign: 'center', fontWeight: '300'}}>
                    {item.items} items
                </Text>
            </View>

        </View>
    )
}