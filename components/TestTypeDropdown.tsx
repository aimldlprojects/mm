import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

interface TestType {
    value: string;
    label: string;
}

const testTypes: TestType[] = [
    { value: 'Tables', label: 'Tables' },
    { value: 'Additions', label: 'Additions' },
    { value: 'Subtractions', label: 'Subtractions' },
    { value: 'Multiplications', label: 'Multiplications' },
    { value: 'Divisions', label: 'Divisions' },
];

const TestTypeDropdown: React.FC = () => {
    const [selectedTestType, setSelectedTestType] = useState<TestType | null>(null);

    const handleTestTypeSelect = (item: TestType) => {
        setSelectedTestType(item);
    };

    return (
        <View style={styles.dropdownContainer}>
            <Text style={styles.label}>Test Type:</Text>
            <Dropdown
                data={testTypes}
                value={selectedTestType?.value}
                onChange={handleTestTypeSelect}
                placeholder="Select Test Type"
                containerStyle={styles.dropdown}
                labelField="label"
                valueField="value"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    dropdownContainer: {
        marginBottom: 10,
    },
    label: {
        marginBottom: 5,
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 5,
    },
});

export default TestTypeDropdown;