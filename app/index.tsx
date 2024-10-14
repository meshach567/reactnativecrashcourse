import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
    <View style={styles.container}>
        <Text>
            RootLayout
        </Text>
        <StatusBar style="auto" />
    </View>
}

export const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});