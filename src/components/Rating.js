import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Rating } from 'react-native-elements';

export default function Feedback({ data }) {
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Avatar
                    rounded
                    source={require('../assets/dp.jpg')}
                    size={50}
                />
                <View>
                    <Text style={{ color: 'blue', fontSize: 18 }}> {data.name}</Text>
                    <Text style={{ color: 'white' }}> {data.date}</Text>
                </View>
            </View>

            <View style={styles.view2}>
                <Rating
                    imageSize={20}
                    defaultRating={5}
                    showRating={false}
                    onFinishRating={(rating) => console.log("rating ", rating)}
                    style = {{alignSelf: 'flex-start'}}
                />
                <Text style={{ color: 'white', marginTop: '2%', fontSize: 18, marginBottom: '5%' }}>
                    {data.review}
                </Text>
            </View>

            <View style={styles.view3}>
                <Avatar
                    avatarStyle={{
                        borderRadius: 7,
                        marginRight: '20%'
                    }}
                    source={require('../assets/dp.jpg')}
                    size={40}
                />
                <Text style={{ color: 'grey', textDecorationColor: 'white', textDecorationLine: 'underline'}}> {data.linkText}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginBottom: '10%',
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
    },
    view1: {
        flexDirection: 'row',
    },
    view2: {
        marginTop: '10%'
    },
    view3: {
        flexDirection: 'row',
        marginBottom: '10%',
        alignItems: 'center'
    }
})