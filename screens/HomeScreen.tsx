import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import UserDropdown from '../components/UserDropdown';
import TestTypeDropdown from '../components/TestTypeDropdown';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import appConfig from '../app.json'; // Import app.json
import { RootStackParamList } from '../types'; // Import types

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const handleStartPress = () => {
        // Check if user and test type are selected
        // If selected, navigate to the QuestionScreen
        navigation.navigate('QuestionScreen'); // Ensure the name matches the registered screen name
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{appConfig.expo.name} - Mental Math</Text> {/* Use appConfig.expo.name */}
            <UserDropdown />
            <TestTypeDropdown />
            <TouchableOpacity style={styles.button} onPress={handleStartPress}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default HomeScreen;