import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import React from "react";
import '../global.css';

export default function App() {
    <View className="flex-1 items-center justify-center bg-white" style={styles.container}>
        <Text className="text-3xl font-pblack">
            Aora!
        </Text>
        <StatusBar style="auto" />
        <Link href="/home" style={{color: 'blue'}}>Go to Home</Link>
    </View>
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