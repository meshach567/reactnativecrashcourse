import { View, Text, TextInput, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import React, { useState } from 'react'
import { icons } from '@/constants'

type formFieldProps = {
    title: string,
    value: string,
    placeholder: string,
    handleChangeText: any,
    otherStyles: string
}
const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }: formFieldProps) => {

    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className='text-base text-gray-100 font-medium'>{title}</Text>

            <View className='w-full h-16 px-4 bg-black border-black-200 w-full h-16 rounded-2xl items-center focus:border-secondary flex-row'>
                <TextInput
                    className='flex-1 text-white font-psemibold text-base'
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                />

                {title === 'Password' && (<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <Image 
                    source={!showPassword ? icons.eye as ImageSourcePropType: icons.eyeHide as ImageSourcePropType }
                    className='w-6 h-6'
                    resizeMode='contain'
                    />
                </TouchableOpacity>)}
            </View>
        </View>
    )
}

export default FormField