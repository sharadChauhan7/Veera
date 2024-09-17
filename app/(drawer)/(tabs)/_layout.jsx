import { Tabs } from 'expo-router'
import React from 'react'
import Expoicon from '../../../constant/expoIcon.js'
import { DrawerToggleButton } from '@react-navigation/drawer'

const _layout = () => {
    return (
        <Tabs
            screenOptions={{

                headerLeft: () => <DrawerToggleButton 
                tintColor='#fff'

                
                />,
                // Customise Header
                headerStyle: {
                    backgroundColor: "#FF5555",
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 24,
                },
                tabBarActiveTintColor: "#FF5555",
                // tabBarInactiveTintColor: "#CDCDE0",
                // tabBarShowLabel: false,
                tabBarStyle: {
                  backgroundColor: "#fff",
                  borderTopWidth: 1,
                  borderTopColor: "#ccc",
                  height: 84,
                },
                headerShown:false,
              }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color}) => (
                        <Expoicon.FontAwesome name="home" size={24} color={color} />
                    ),
                    headerShown: true,
                }}
            />
            <Tabs.Screen
                name='maps'
                options={{
                    title: "Map",
                    tabBarIcon: ({ color }) => (
                        <Expoicon.Entypo name="map" size={24} color={color} />
                    ),
                    headerShown: true,
                }}
            />
            <Tabs.Screen
                name="profile"

                options={{
                    title: "Profile",
                    tabBarIcon: ({ color }) => (
                        <Expoicon.FontAwesome name="user" size={24} color={color} />
                    ),
                    headerShown: true,
                }}
            />
            <Tabs.Screen
                name="setting"

                options={{
                    title: "Setting",
                    tabBarIcon: ({ color }) => (
                        <Expoicon.FontAwesome name="gear" size={24} color={color} />
                    ),
                    headerShown: true,
                }}
            />
        </Tabs>
        // </GestureHandlerRootView>
    )
}

export default _layout