import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import QuestionScreen from '../screens/QuestionScreen';
import { RootStackParamList } from '../types'; // Import types

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
        </Stack.Navigator>
    );
};


export default RootNavigator;