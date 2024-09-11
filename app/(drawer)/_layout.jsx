import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { router } from 'expo-router';
import { useSession } from '../../context/ctx.jsx';
import { Redirect } from 'expo-router'


const CustomDrawerContent = (props) => {
    const { signOut } = useSession();
    return (
        <DrawerContentScrollView {...props}
    // change the header name of the drawer
        >
            <DrawerItem
                label={"Home"}
                onPress={() => router.push('(drawer)/(tabs)/home')}
                />
            <DrawerItem
                label={"Maps"}
                onPress={() => router.push('(drawer)/(tabs)/maps')}
                />
            <DrawerItem
                label={"Profile"}
                onPress={() => router.push('(drawer)/(tabs)/profile')}
                />
            <DrawerItem
                label={"Setting"}
                onPress={() => router.push('(drawer)/(tabs)/setting')}
                />
            <DrawerItem
                label={"Sign Out"}
                onPress={() =>{signOut()}}
                />
        </DrawerContentScrollView>

)
}
const _layout = () => {
    const {session} = useSession();
    console.log(session);
    if(!session){
        return <Redirect href="sign-in" />
    }
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                drawerContent={(props) => <CustomDrawerContent {...props} />}
            />
        </GestureHandlerRootView>
    )
}

export default _layout