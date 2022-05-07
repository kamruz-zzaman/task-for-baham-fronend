import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, InputRightElement, Select, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const CustomerDetails = () => {
    const districtList = [
        "Kishoreganj",
        "Gopalganj",
        "Gazipur",
        "Faridpur",
        "Dhaka",
        "Narsingdi",
        "Narayanganj",
        "Munshiganj",
        "Manikganj",
        "Madaripur",
        "Rajbari",
        "Shariatpur",
        "Tangail",
        "Cumilla",
        "Chattogram",
        "Chandpur",
        "Brahmanbaria",
        "Bandarban",
        "Noakhali",
        "Lakshmipur",
        "Khagrachhari",
        "Feni",
        "Cox’s Bazar",
        "Rangamati",
        "Patuakhali",
        "Jhalokati",
        "Bhola",
        "Barishal",
        "Barguna",
        "Pirojpur",
        "Sylhet",
        "Sunamganj",
        "Moulvibazar",
        "Habiganj",
        "Khulna",
        "Jhenaidah",
        "Jashore",
        "Chuadanga",
        "Bagerhat",
        "Satkhira",
        "Narail",
        "Meherpur",
        "Magura",
        "Kushtia",
        "Chapainawabganj",
        "Natore",
        "Joypurhat",
        "Naogaon",
        "Bogura",
        "Sirajganj",
        "Rajshahi",
        "Pabna",
        "Dinajpur",
        "Gaibandha",
        "Rangpur",
        "Panchagarh",
        "Nilphamari",
        "Lalmonirhat",
        "Kurigram",
        "Thakurgaon",
        "Sherpur",
        "Netrokona",
        "Mymensingh",
        "Jamalpur"
    ]
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={4} mx={'auto'} py={12} px={6}
                boxShadow={'lg'}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Customer Information Form</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        Please fill the information.
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="Name">
                            <FormLabel>Name</FormLabel>
                            <Flex>
                                <Input placeholder='First Name' marginRight='10px' type="text" />
                                <Input placeholder='Last Name' type="text" />
                            </Flex>
                        </FormControl>
                        <FormControl id="Address">
                            <FormLabel>Customer Address</FormLabel>
                            <Input placeholder='Street Address' type="text" />
                        </FormControl>
                        <FormControl id="City">
                            <Flex>
                                <Select placeholder='District' marginRight='10px'>
                                    {districtList.map((data, index) => (
                                        <option key={index} value={`${data}`}>{data}</option>
                                    ))}
                                </Select>
                                <Input placeholder='Postal / Zip code' type="text" />
                            </Flex>
                        </FormControl>
                        <FormControl>
                            <Flex
                                justify={'space-between'}
                            >
                                <Box marginRight={{ base: "10px", md: "0px" }}>
                                    <FormLabel>Date of Birth</FormLabel>
                                    <Input width={{ base: null, md: "202px" }} type="date" />
                                </Box>
                                <Select width={{ base: null, md: "228px" }} placeholder='Gender' marginTop='32px' >
                                    <option value='Male'>Male</option>
                                    <option value='Female'>Female</option>
                                </Select>
                            </Flex>
                        </FormControl>
                        <FormControl>
                            <Box>
                                <FormLabel>Phone</FormLabel>
                                <Input placeholder='+880 **********' type="number" />
                            </Box>
                        </FormControl>

                        <Stack spacing={10}>
                            <Button
                                marginTop='20px'
                                bg={'#f22224'}
                                color={'white'}
                                _hover={{
                                    bg: '#a51416',
                                }}>
                                Submit
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};

export default CustomerDetails;