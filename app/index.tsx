import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
    return (
        <SafeAreaView>
            <View>
                <Text className='text-2xl text-green-600 bg-green-200'>Nativewind</Text>
                <Text className='text-3xl'>Hello</Text>
            </View>

            <View className='viewBox' />

        </SafeAreaView>
    );
};

export default index;