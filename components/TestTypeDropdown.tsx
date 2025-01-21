import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

interface TestType {
    value: string;
    label: string;
}

interface TestTypeDropdownProps {
    onSelect: (value: string) => void;
    style?: object;
}

const testTypes: TestType[] = [
    { value: 'Tables', label: 'Tables' },
    { value: 'Additions', label: 'Additions' },
    { value: 'Subtractions', label: 'Subtractions' },
    { value: 'Multiplications', label: 'Multiplications' },
    { value: 'Divisions', label: 'Divisions' },
];

const TestTypeDropdown: React.FC<TestTypeDropdownProps> = ({ onSelect, style }) => {
    const [selectedTestType, setSelectedTestType] = useState<string | null>(null);

    const handleTestTypeSelect = (item: TestType) => {
        setSelectedTestType(item.value);
        onSelect(item.value);
    };

    return (
        <View style={[styles.dropdownContainer, style]}>
            <Dropdown
                data={testTypes}
                value={selectedTestType}
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
        marginLeft: 10,
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 5,
        width: 200,
        maxHeight: 300,
    },
});

export default TestTypeDropdown;
