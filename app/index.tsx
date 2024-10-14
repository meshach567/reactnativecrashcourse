import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import React from "react";

export default function App() {
    <View className="flex-1items-center justify-center bg-white" style={styles.container}>
        <Text>
            RootLayout
        </Text>
        <StatusBar style="auto" />
        <Link href="/profile" style={{color: 'blue'}}>Go to Profile</Link>
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