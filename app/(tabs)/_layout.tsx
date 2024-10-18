import { StatusBar } from "expo-status-bar";
import { Redirect, Tabs } from "expo-router";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import React from "react";
import { icons } from "../../constants";


type tabProps = {
    icon: string, color: string, name: string, focused: boolean
}


const TabIcon = ({ icon, color, name, focused }: tabProps) => {
    return (
        <View className='items-center justify-center gap-2 '>
            <Image
                source={icon as ImageSourcePropType}
                resizeMode='contain'
                tintColor={color}
                className='w-6 h-6'
            />
            <Text
                className={`${focused ? 'font-psemibold' : 'font-pregulat'} text-xs`} style={{ color: color }}
            >
                {name}
            </Text>
        </View>
    )
}

const TabLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#FFA001',
                    tabBarInactiveTintColor: '#CDCDE0',
                    tabBarStyle: {
                        backgroundColor: '#161622',
                        borderTopColor: '#232533',
                        borderTopWidth: 1,
                        height: 84
                    }
                }}
            >
                <Tabs.Screen
                    name='home'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name='Home'
                                focused={focused} />
                        )
                    }}
                />

                <Tabs.Screen
                    name='bookmrk'
                    options={{
                        title: 'bookmrk',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.bookmark}
                                color={color}
                                name='Bookmark'
                                focused={focused} />
                        )
                    }}
                />

                <Tabs.Screen
                    name='create'
                    options={{
                        title: 'create',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.plus}
                                color={color}
                                name='Create'
                                focused={focused} />
                        )
                    }}
                />

                <Tabs.Screen
                    name='profile'
                    options={{
                        title: 'profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.profile}
                                color={color}
                                name='Profile'
                                focused={focused} />
                        )
                    }}
                />

            </Tabs>
        </>
    )
}

export default TabLayout