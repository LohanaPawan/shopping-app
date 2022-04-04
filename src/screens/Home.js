import { View, Text, useWindowDimensions, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Header from '../components/Header'
import Items from './Items';
import Reviews from './Reviews';
import About from './About';
const { height, width } = Dimensions.get('screen')

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: 'black' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);



export default function Home() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Items' },
    { key: 'second', title: 'Reviews' },
    { key: 'third', title: 'About' }
  ]);

  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case 'first':
        return <View style={{ flex: 1 }}>
          <Items />
        </View>
      case 'second':
        return <View style={{ flex: 1 }}>
          <Reviews />
        </View>
        case 'third':
          return <View style={{ flex: 1 }}>
            <About />
          </View>
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={{ marginLeft: '5%', marginRight: '5%', marginTop: '3%' }}>
        <Header title="Shop" />


        <View style={{ height: '100%', marginTop: (height / 100) }}>
          <TabView
            renderTabBar={props => <TabBar {...props}
              indicatorStyle={{ backgroundColor: 'white' }}
              style={{
                backgroundColor: 'black',
              }}
              tabStyle={{ borderTopWidth: 0.25, borderTopColor: 'white' }}
            />}
            tabBarPosition='top'
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={index => setIndex(index)}
            initialLayout={{ width: Dimensions.get('window').width }}
          />
        </View>
      </View>
    </View>
  )
}