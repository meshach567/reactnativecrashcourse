import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';

type customButtonProps = {
    title: string,
    handlePress: any,
    containerStyles: any,
 
    isLoading: boolean
}

const CustomButton = ({ title, handlePress, containerStyles, isLoading}: customButtonProps) => {
    return (
        <TouchableOpacity className={`bg-primary rounded-xl min-h-[62px] justify-center items-center`}>
            <Text className='text-primary font-psemibold text-lg'>
                CustoButton
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton; 