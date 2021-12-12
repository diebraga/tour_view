import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { useRef } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LOGIN_USER } from '../graphql/mutations/login';
import { setCookie } from "nookies";
import { useRouter } from "next/router";


type OnSubmitData = {
  email: string
  password: string
}

export default function CommentsForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [signIn, { loading }] = useMutation(LOGIN_USER, {
    onError: (err) => {
      alert(err.message)
    }
  });

  const router = useRouter()

  const onSubmit: SubmitHandler<OnSubmitData> = async (formData) => {    
    const response = await signIn({
      variables: {
        identifier: formData.email,
        password: formData.password,
      }
    })  
    if (response.data) {
      setCookie(null, 'token', response.data.login.jwt , {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
      router.push('/')
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            onSubmit={handleSubmit(onSubmit)}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" {...register("email")}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" {...register("password")}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  type='submit'
                  isLoading={loading}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>     
    </form>
    </>
  )
}