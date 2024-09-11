import { View, Text, Image } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { router, usePathname } from 'expo-router';
import { useSession } from '../../context/ctx.jsx';
import { Redirect } from 'expo-router'
import Expoicons from '../../constant/expoIcon.js'
import IMG from '../../constant/images.js'


const CustomDrawerContent = (props) => {
    const { signOut } = useSession();
    const pathName = usePathname();
    console.log(IMG.profile);
    return (
        <DrawerContentScrollView {...props}>
            <View classname=" border-2">
                <View className="flex justify-center items-center mt-5">
                    <Image
                        source={IMG.profile}
                        className="w-[100px] h-[100px] rounded-full"
                        resizeMode="contain"
                    />
                    <Text className="text-2xl font-semibold text-gray-700 mt-4  font-psemibold">Sharad Chauhan</Text>
                    <Text className="text-sm font-pregular text-gray-500 mt-1 mb-4 px-4 ">sharadsingh6464@gmail.com</Text>
                </View>
            </View>
            <DrawerItem
                labelStyle={{ marginLeft: -20, fontSize: 18, color: pathName === '/home' ? 'white' : 'black' }}
                label={"Home"}
                style={{ backgroundColor: pathName === '/home' ? '#333' : 'white' }}
                icon={({ color, size }) => <Expoicons.FontAwesome name="home" size={size} color={pathName === '/home' ? 'white' : color} />}
                onPress={() => router.push('(drawer)/(tabs)/home')}
            />
            <DrawerItem
                labelStyle={{ marginLeft: -20, fontSize: 18, color: pathName === '/maps' ? 'white' : 'black' }}
                label={"Maps"}
                style={{ backgroundColor: pathName === '/maps' ? '#333' : 'white' }}
                icon={({ color, size }) => <Expoicons.Entypo name="map" size={size} color={pathName === '/maps' ? 'white' : color} />}
                onPress={() => router.push('(drawer)/(tabs)/maps')}
            />
            <DrawerItem
                labelStyle={{ marginLeft: -20, fontSize: 18, color: pathName === '/profile' ? 'white' : 'black' }}
                style={{ backgroundColor: pathName === '/profile' ? '#333' : 'white' }}
                label={"Profile"}
                icon={({ color, size }) => <Expoicons.FontAwesome name="user" size={size} color={pathName === '/profile' ? 'white' : color} />}
                onPress={() => router.push('(drawer)/(tabs)/profile')}
            />
            <DrawerItem
                labelStyle={{ marginLeft: -20, fontSize: 18, color: pathName === '/setting' ? 'white' : 'black' }}
                style={{ backgroundColor: pathName === '/setting' ? '#333' : 'white' }}
                label={"Setting"}
                icon={({ color, size }) => <Expoicons.FontAwesome name="gear" size={size} color={pathName === '/setting' ? 'white' : color} />}
                onPress={() => router.push('(drawer)/(tabs)/setting')}
            />
            <DrawerItem
                labelStyle={{ marginLeft: -20, fontSize: 18, color: pathName === '/sign-in' ? 'white' : 'black' }}
                style={{ backgroundColor: pathName === 'sign-in' ? '#333' : 'white' }}
                label={"Sign Out"}
                icon={({ color, size }) => <Expoicons.FontAwesome name="sign-out" size={size} color={pathName === '/sign-out' ? 'white' : color} />}
                onPress={() => { signOut() }}
            />
        </DrawerContentScrollView>

    )
}
const _layout = () => {
    const { session } = useSession();
    console.log(session);
    if (!session) {
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