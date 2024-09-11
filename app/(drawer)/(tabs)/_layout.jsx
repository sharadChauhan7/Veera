import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name='maps'
                options={{
                        headerShown: false,
                    }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="setting"
                options={{
                    headerShown: false,
                }}
            />
        </Tabs>
        // </GestureHandlerRootView>
    )
}

export default _layout