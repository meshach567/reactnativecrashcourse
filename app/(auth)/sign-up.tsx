import { View, Text, ScrollView, Image, ImageSourcePropType } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const submit = () => {

  }

  const [isSubmiting, setiSSubmiting] = useState(false);

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center min-h-[83vh] px-4 my-6'>
          <Image
            source={images.logo as ImageSourcePropType}
            resizeMode='contain'
            className='w-[115px] h-[35px]'
          />
          <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>
            Sign Up to Auro
          </Text>

          <FormField
            title='Username'
            value={form.username}
            handleChangeText={(e: any) => setForm({ ...form, username: e })}
            otherStyles="mt-10" placeholder={''} keyboardType={''} />
            
          <FormField
            title='Email'
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            placeholder={''}
            keyboardType='email-address'
          />

          <FormField
            title='Email'
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            placeholder={''} keyboardType={''}
          />

          <CustomButton
            title='Sign In'
            handlePress={submit}
            containerStyles='mt-7'
            isLoading={isSubmiting} textStyles={''}          />

          <View className='justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100'>
              Have an account already?
            </Text>
            <Link href='/sign-in' className='text-lg font-psemibold text-secondary'>
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp