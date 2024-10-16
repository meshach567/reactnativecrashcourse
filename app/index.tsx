import { Image, ImageSourcePropType, ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link, Redirect, router } from "expo-router";
import React from "react";
import '../global.css';
import { images } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";

export default function App() {
    <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ height: '100%' }}>
            <View className="w-full justify-center min-h-[85vh] items-center h-full px-4">
                <Image source={images.logo as ImageSourcePropType} className="w-[130px] h-[84px]" resizeMode="contain" />
                <Image source={images.cards as ImageSourcePropType} className="max-w-[380px] w-full h-[300px]" resizeMode="contain" />

                <View className="relative mt-5">
                    <Text className="text-3xl text-white font-bold text-center ">
                        Discover Endless Possibility with
                    </Text>
                    <Text className="text-secondary-200">
                        Aora
                    </Text>
                    <Image source={images.path as ImageSourcePropType} className="w-[136px] h-[15px] absolute -bottom-2 -right-8" resizeMode="contain" />
                    <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
                        Where creativity meets innovation: embark on a Journey of limitness exploration with Aora
                    </Text>

                    <CustomButton title="Continue with Email"
                    handlePress={() => router.push('/sign-in') }
                    containerStyles="w-full mt-7" 
                     isLoading={false }                    
                    />
                </View>
            </View>
        </ScrollView>
        <StatusBar backgroundColor="#161622" style="light" /> 
    </SafeAreaView>
}

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});