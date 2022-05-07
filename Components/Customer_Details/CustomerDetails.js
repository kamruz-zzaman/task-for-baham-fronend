import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Select, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react';
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
const CustomerDetails = () => {

    const [data, setData] = useState({ firstNname: "", lastName: "", streetAddress: "", district: "", zipCode: "", birthDate: "", gender: "", phone: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        const firstNname = e.target.firstNname.value;
        const lastName = e.target.lastName.value;
        const streetAddress = e.target.streetAddress.value;
        const district = e.target.district.value;
        const zipCode = e.target.zipCode.value;
        const birthDate = e.target.birthDate.value;
        const gender = e.target.birthDate.value;
        const phone = e.target.birthDate.value;
        const streatValidation = /[,#-\/\s\!\@\$.....]/gi;
        const postalCodeValidation = /^([0-9]{5}|[a-zA-Z][a-zA-Z ]{0,49})$/;
        const phoneValidation = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (firstNname === "") {
            document.getElementById("firstName").style.border = "1px solid red";
        }
        else {
            formData.append('firstNname', firstNname);
        }
        if (lastName === "") {
            document.getElementById("lastName").style.border = "1px solid red";
        }
        else {
            formData.append('lastName', lastName);
        }
        if (streetAddress.match(streatValidation)) {
            formData.append('streetAddress', streetAddress)
        }
        else {
            document.getElementById("addressVal").style.border = "1px solid red";
        }
        if (zipCode.match(postalCodeValidation)) {
            formData.append('zipCode', zipCode)
        }
        else {
            document.getElementById("zipVAlidate").style.border = "1px solid red";
        }
        if (phone.match(phoneValidation)) {
            formData.append('phone', phone)
        }
        else {
            document.getElementById("phoneValidate").style.border = "1px solid red";
        }

        formData.append('district', district)
        formData.append('zipCode', zipCode)
        formData.append('birthDate', birthDate)
        formData.append('gender', gender)
    }
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
                        <form onSubmit={handleSubmit}>
                            <FormControl id="Name">
                                <FormLabel>Name</FormLabel>
                                <Flex>
                                    <Input id='firstName' name='firstNname' placeholder='First Name' marginRight='10px' type="text" />
                                    <Input id='lastName' name='lastName' placeholder='Last Name' type="text" />
                                </Flex>
                            </FormControl>
                            <FormControl id="Address">
                                <FormLabel>Customer Address</FormLabel>
                                <Input id='addressVal' required name='streetAddress' placeholder='Street Address' type="text" />
                            </FormControl>
                            <FormControl id="City" my="10px">
                                <Flex
                                    justify={'space-between'}
                                >
                                    <Box>
                                        <FormLabel>District</FormLabel>
                                        <Select required name='district' placeholder='District' marginRight='10px'>
                                            {districtList.map((data, index) => (
                                                <option key={index} value={`${data}`}>{data}</option>
                                            ))}
                                        </Select>
                                    </Box>
                                    <Box>
                                        <FormLabel>Postal / Zip Code</FormLabel>
                                        <Input id='zipVAlidate' required name='zipCode' placeholder='Postal / Zip code' type="text" />
                                    </Box>
                                </Flex>
                            </FormControl>
                            <FormControl
                                my="10px"
                            >
                                <Flex
                                    justify={'space-between'}
                                >
                                    <Box marginRight={{ base: "10px", md: "0px" }}>
                                        <FormLabel>Date of Birth</FormLabel>
                                        <Input required name='birthDate' width={{ base: null, md: "185px" }} type="date" />
                                    </Box>
                                    <Box>
                                        <FormLabel>Gender</FormLabel>
                                        <Select required name='gender' width={{ base: null, md: "218px" }} placeholder='Gender' >
                                            <option value='Male'>Male</option>
                                            <option value='Female'>Female</option>
                                        </Select>
                                    </Box>
                                </Flex>
                            </FormControl>
                            <FormControl>
                                <Box>
                                    <FormLabel>Phone</FormLabel>
                                    <Input id='phoneValidate' required name='phone' placeholder='+880 **********' type="number" />
                                </Box>
                            </FormControl>

                            <Stack spacing={10}>
                                <Button
                                    type='submit'
                                    marginTop='20px'
                                    bg={'#f22224'}
                                    color={'white'}
                                    _hover={{
                                        bg: '#a51416',
                                    }}>
                                    Submit
                                </Button>
                            </Stack>
                        </form>
                    </Stack>
                </Box>
            </Stack >
        </Flex >
    );
};

export default CustomerDetails;