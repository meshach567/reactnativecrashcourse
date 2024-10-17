import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';

type customButtonProps = {
    title: string,
    handlePress: any,
    containerStyles: any,
    isLoading: boolean,
    textStyles: string
}

const CustomButton = ({ title, handlePress, containerStyles, isLoading, textStyles}: customButtonProps) => {
    return (
        <TouchableOpacity onPress={handlePress}
         activeOpacity={0.7}
          className={`bg-primary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50': ''}`}
          
          disabled={isLoading}
          >
            <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton; 