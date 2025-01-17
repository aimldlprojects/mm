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
            <View style={{ flexDirection: 'row', alignItems: 'center', maxHeight: 30, justifyContent: 'flex-start' }}>
                <Text style={styles.selectedTestTypeText}>
                    {selectedTestType ? `Test Type:   ${selectedTestType.label}` : 'Test Type: Select Test Type'}
                </Text>
                <Dropdown
                    data={testTypes}
                    value={selectedTestType?.value}
                    onChange={handleTestTypeSelect}
                    placeholder="Select Test Type"
                    containerStyle={[styles.dropdown, { flex: 1, minWidth: 180, maxHeight: 300, alignSelf: 'flex-start', marginLeft: -150 }]}
                    labelField="label"
                    valueField="value"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    dropdownContainer: {
        marginBottom: 10,
        marginLeft: 60,
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 5,
    },

    selectedTestTypeText: {
        fontSize: 18,
        color: '#333',
        marginRight: 10,
    },
});

export default TestTypeDropdown;