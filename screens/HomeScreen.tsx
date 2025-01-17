import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import UserDropdown from '../components/UserDropdown';
import TestTypeDropdown from '../components/TestTypeDropdown';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import appConfig from '../app.json'; // Import app.json
import { RootStackParamList } from '../types'; // Import types
import { FontAwesome } from '@expo/vector-icons'; // Import icons

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
            <View style={styles.dropdownContainer}>
                <UserDropdown style={styles.dropdown} />
            </View>
            <View style={styles.dropdownContainer}>
                <TestTypeDropdown style={styles.dropdown} />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleStartPress}>
                <Text style={styles.buttonText}>Start</Text>
                <FontAwesome name="arrow-right" size={20} color="white" />
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
        backgroundColor: '#f0f8ff', // Light background color
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
    },
    dropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        width: '80%',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginRight: 10,
    },
    dropdown: {
        flex: 1,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
        marginTop: 30,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        marginRight: 10,
    },
});

export default HomeScreen;