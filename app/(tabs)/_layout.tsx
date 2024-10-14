import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router';

import icons from '../../constants/icons'

type tabProps = {
    icon: string, color: string, name: string, focused: string
}


const TabIcon = ({ icon, color, name, focused }: tabProps) => {
    return (
        <View className='items-center justify-center gap-2 '>
            <Image
                source={icons as ImageSourcePropType}
                resizeMode='contain'
                tintColor={color}
                className='w-6 h-6'
            />
            <Text 
            className={`${focused ? 'font-psemibold' : 'font-pregulat'} text-xs`}
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
                tabBarShowLabel: false
            }}>
                <Tabs.Screen
                    name='home'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home} 
                                color={''} 
                                name={''} 
                                 focused={''} />
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
                                icon={icons.home} 
                                color={''} 
                                name={''} 
                                 focused={''} />
                        )
                    }}
                />
                <Tabs.Screen
                    name='home'
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home} 
                                color={color} 
                                name={''} 
                                 focused={''} />
                        )
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabLayout