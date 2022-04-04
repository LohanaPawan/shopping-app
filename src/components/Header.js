import { View, Text, Dimensions } from 'react-native'
import React from 'react'

//importing icons
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

const { height, width } = Dimensions.get('screen')

export default function Header({ title }) {
    return (
        <View style={{ 
            // borderBottomWidth: 0.25,
            // borderBottomColor: 'grey',
            height: (height / 100) * 5, width: (width / 100) * 100, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

            <AntDesign
                name='left'
                color={'white'}
                size={28}
            />

            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, marginLeft: '10%' }}>
                {title}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                <Ionicons
                    name="chatbox-ellipses-outline"
                    size={28}
                    color={'white'}
                    style={{ marginRight: '10%' }}
                />

                <Feather
                    name="upload"
                    size={28}
                    color={'white'}
                    style={{ marginRight: '10%' }}
                />

                <Feather
                    name="heart"
                    size={28}
                    color={'white'}
                // style={{marginRight: '10%'}}
                />
            </View>
        </View>
    )
}