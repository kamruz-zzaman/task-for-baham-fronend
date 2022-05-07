import React, { useState } from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    InputRightElement,
    Image,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");


    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const url = '';
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (data.email.match(mailformat) && data.email !== "" && data.password !== "") {
            axios.post(url, data)
                .then((res) => {
                    alert("login Success")
                    localStorage.setItem('token', res.data);
                    setError('');
                })
                .catch((err) => {
                    setError(err);
                })
        }
        if (!data.email.match(mailformat)) {
            setError(`You have entered an invalid email address!`)
        }
        if (data.password === "") {
            setError(`"Password" is not allowed to be empty`)
        }
    };
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={4} mx={'auto'} width='400px' py={12} px={6} bg={useColorModeValue('white', 'gray.700')}
                boxShadow={'lg'}>
                <Stack align={'center'}>
                    <Image src='https://i.ibb.co/sbQJ51M/baham-logo.webp' marginBottom="20px" alt='logo' />
                    <Heading fontSize={'4xl'}>Welcome Back!</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        Sign in to continue
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <Input
                                name="email"
                                onChange={handleChange}
                                value={data.email}
                                required
                                placeholder='john@due.com'
                                type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input
                                placeholder='********'
                                type={showPassword ? "text" : "password"}
                                name="password"
                                onChange={handleChange}
                                value={data.password}
                                required
                            />
                            <InputRightElement width="4.5rem">
                                <Button bgColor='transparent' marginLeft="20px" marginBottom="-105px" h="1.75rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                </Button>
                            </InputRightElement>
                        </FormControl>
                        {error && <Box color="red" className="error_msg">{error}</Box>}
                        <Stack spacing={10}>
                            <Button
                                onClick={handleSubmit}
                                marginTop='20px'
                                bg={'#f22224'}
                                color={'white'}
                                _hover={{
                                    bg: '#a51416',
                                }}>
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};

export default Login;