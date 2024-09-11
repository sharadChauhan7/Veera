import { Tabs } from 'expo-router'
import React from 'react'
import Expoicon from '../../../constant/expoIcon.js'

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarIcon: ({color}) => (
                        <Expoicon.FontAwesome name="home" size={24} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name='maps'
                options={{
                    tabBarIcon: ({color}) => (
                        <Expoicon.Entypo name="map" size={24} color={color}/>  
                    ),                
                        headerShown: false,
                    }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({color}) => (
                        <Expoicon.FontAwesome name="user" size={24} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="setting"
                
                options={{
                    tabBarIcon: ({color}) => (
                        <Expoicon.FontAwesome name="gear" size={24} color={color} />
                    ),
                    headerShown: false,
                }}
            />
        </Tabs>
        // </GestureHandlerRootView>
    )
}

export default _layout