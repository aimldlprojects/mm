import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../types'; // Import types

type QuestionScreenRouteProp = RouteProp<RootStackParamList, 'QuestionScreen'>;

const QuestionScreen: React.FC = () => {
    const route = useRoute<QuestionScreenRouteProp>();
    const { testType } = route.params;

    const [num1, setNum1] = useState(Math.floor(Math.random() * 10) + 1);
    const [num2, setNum2] = useState(Math.floor(Math.random() * 10) + 1);
    const [userAnswer, setUserAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [totalAttempted, setTotalAttempted] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

    const handleAnswerSubmit = () => {
        setTotalAttempted(totalAttempted + 1);

        // Calculate correct answer based on selected test type
        let correctAnswer;
        switch (testType) {
            case 'Additions':
                correctAnswer = num1 + num2;
                break;
            case 'Subtractions':
                correctAnswer = num1 - num2;
                break;
            case 'Multiplications':
                correctAnswer = num1 * num2;
                break;
            case 'Divisions':
                correctAnswer = num1 / num2;
                break;
            case 'Tables':
                correctAnswer = num1 * num2;
                break;
            default:
                correctAnswer = num1 + num2; // Default to addition
                break;
        }

        if (userAnswer === correctAnswer.toString()) {
            setScore(score + 1);
        }

        // Generate new random numbers and avoid previously asked questions
        let newNum1, newNum2;
        do {
            newNum1 = Math.floor(Math.random() * 10) + 1;
            newNum2 = Math.floor(Math.random() * 10) + 1;
        } while (
            answeredQuestions.includes(newNum1 * 10 + newNum2) ||
            answeredQuestions.includes(newNum2 * 10 + newNum1)
        );

        setNum1(newNum1);
        setNum2(newNum2);
        setAnsweredQuestions([...answeredQuestions, newNum1 * 10 + newNum2]);
        setUserAnswer('');
    };

    const handleReset = () => {
        setScore(0);
        setTotalAttempted(0);
        setAnsweredQuestions([]);
        setNum1(Math.floor(Math.random() * 10) + 1);
        setNum2(Math.floor(Math.random() * 10) + 1);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.question}>
                {num1} {testType === 'Additions' ? '+' : testType === 'Subtractions' ? '-' : testType === 'Multiplications' ? 'x' : testType === 'Divisions' ? '/' : testType === 'Tables' ? 'x' : '+'} {num2} = ?
            </Text>
            <TextInput
                style={styles.input}
                value={userAnswer}
                onChangeText={setUserAnswer}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleAnswerSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <Text style={styles.score}>
                Score: {score}/{totalAttempted}
            </Text>
            <TouchableOpacity style={styles.button} onPress={handleReset}>
                <Text style={styles.buttonText}>Reset</Text>
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
    question: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        width: '80%',
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
    score: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
});

export default QuestionScreen;