import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

interface User {
    value: string;
    label: string;
}

const users: User[] = [
    { value: 'Bhavi', label: 'Bhavi' },
    { value: 'Madhu', label: 'Madhu' },
    { value: 'User', label: 'User' },
];

const UserDropdown: React.FC = () => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const handleUserSelect = (item: User) => {
        setSelectedUser(item);
    };

    return (
        <View style={styles.dropdownContainer}>
            <Text style={styles.label}>User:</Text>
            <Dropdown
                data={users}
                value={selectedUser?.value}
                onChange={handleUserSelect}
                placeholder="Select User"
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

export default UserDropdown;