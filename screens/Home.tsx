import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("MovieDetail")}
            >
                <Text>Navigate to MovieDetail</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;