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
                style={{ backgroundColor: pathName === '/home' ? '#FF5555' : 'white' }}
                icon={({ color, size }) => <Expoicons.FontAwesome name="home" size={size} color={pathName === '/home' ? 'white' : color} />}
                onPress={() => router.push('(drawer)/(tabs)/home')}
            />
            <DrawerItem
                labelStyle={{ marginLeft: -20, fontSize: 18, color: pathName === '/profile' ? 'white' : 'black' }}
                style={{ backgroundColor: pathName === '/profile' ? '#FF5555' : 'white' }}
                label={"Profile"}
                icon={({ color, size }) => <Expoicons.FontAwesome name="user" size={size} color={pathName === '/profile' ? 'white' : color} />}
                onPress={() => router.push('(drawer)/profile')}
            />
            <DrawerItem
                labelStyle={{ marginLeft: -20, fontSize: 18, color: pathName === '/wellness' ? 'white' : 'black' }}
                style={{ backgroundColor: pathName === '/wellness' ? '#FF5555' : 'white' }}
                label={"WellNess"}
                icon={({ color, size }) => <Expoicons.MaterialIcons name="health-and-safety" size={size} color={pathName === '/wellness' ? 'white' : color} />}
                onPress={() => router.push('(drawer)/(tabs)/wellness')}
            />
            <DrawerItem
                labelStyle={{ marginLeft: -20, fontSize: 18, color: pathName === '/maps' ? 'white' : 'black' }}
                label={"Maps"}
                style={{ backgroundColor: pathName === '/maps' ? '#FF5555' : 'white' }}
                icon={({ color, size }) => <Expoicons.Entypo name="map" size={size} color={pathName === '/maps' ? 'white' : color} />}
                onPress={() => router.push('(drawer)/(tabs)/maps')}
            />
            
            <DrawerItem
                labelStyle={{ marginLeft: -20, fontSize: 18, color: pathName === '/setting' ? 'white' : 'black' }}
                style={{ backgroundColor: pathName === '/contacts' ? '#FF5555' : 'white' }}
                label={"Contacts"}
                icon={({ color, size }) => <Expoicons.AntDesign name="contacts" size={size} color={pathName === '/contacts' ? 'white' : color} />}
                onPress={() => router.push('(drawer)/(tabs)/contacts')}
            />
            <DrawerItem
                labelStyle={{ marginLeft: -20, fontSize: 18, color: pathName === '/sign-in' ? 'white' : 'black' }}
                style={{ backgroundColor: pathName === 'sign-in' ? '#FF5555' : 'white' }}
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
    // if (!session) {
    //     return <Redirect href="sign-in" />
    // }
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={({ route }) => ({
                    headerShown: route.name === 'profile' ? true : false, // Show header on profile page only
                    headerTitle: route.name === 'profile' ? 'Profile' : '', // Set header title for profile
                    headerStyle: { backgroundColor: '#FF5555' }, // Customize header style
                    headerTintColor: '#fff', // Header text color
                })}
            />
        </GestureHandlerRootView>
    )
}

export default _layout