import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

interface User {
    value: string;
    label: string;
}

interface UserDropdownProps {
    onSelect: (value: string) => void;
    style?: object;
}

const users: User[] = [
    { value: 'Bhavi', label: 'Bhavi' },
    { value: 'Madhu', label: 'Madhu' },
    { value: 'User', label: 'User' },
];

const UserDropdown: React.FC<UserDropdownProps> = ({ onSelect, style }) => {
    const [selectedUser, setSelectedUser] = useState<string | null>(null);

    const handleUserSelect = (item: User) => {
        setSelectedUser(item.value);
        onSelect(item.value);
    };

    return (
        <View style={[styles.dropdownContainer, style]}>
            <Dropdown
                data={users}
                value={setSelectedUser}
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
        marginLeft: 10,
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 5,
        width: 200,
        maxHeight: 200,
    },
});

export default UserDropdown;
