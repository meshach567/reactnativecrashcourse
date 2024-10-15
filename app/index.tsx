import {  Image, ImageSourcePropType,  ScrollView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import React from "react";
import '../global.css';
import { images } from "@/constants";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    <SafeAreaView className="bg-primary h-full">
        <ScrollView contentContainerStyle={{ height: '100%'}}>
            <View className="w-full justify-center items-center h-full px-4">
                <Image source={images.logo as ImageSourcePropType} className="w-[130px] h-[84px]" resizeMode="contain"/>
                <Image source={images.cards as ImageSourcePropType} className="max-w-[380px] w-full h-[300px]" resizeMode="contain" />
            </View>
        </ScrollView>
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