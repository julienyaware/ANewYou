import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useAuthentication } from '../providers/AuthenticationProviderContext';
import { useNavigation } from '@react-navigation/native';

const AuthenticationWrapper = (Component) => {
    return (props) => {
        const { user } = useAuthentication();
        const navigation = useNavigation();

        if (user === null) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Please login first</Text>
                </View>
            );
        }

        if (!user) {
            navigation.navigate('Login');
            return null;
        }

        return <Component {...props} />;
    };
};

export default AuthenticationWrapper;
