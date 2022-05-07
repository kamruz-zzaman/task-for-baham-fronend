import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Select, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import axios from 'axios';
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
    // error handle
    const [nameError, setNameError] = useState('');
    const [streetError, setStreetError] = useState('');
    const [zipError, setZipError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    // submit form data
    const handleSubmit = (e) => {
        e.preventDefault();
        // get form data
        const formData = new FormData()
        const firstNname = e.target.firstNname.value;
        const lastName = e.target.lastName.value;
        const streetAddress = e.target.streetAddress.value;
        const district = e.target.district.value;
        const zipCode = e.target.zipCode.value;
        const birthDate = e.target.birthDate.value;
        const gender = e.target.gender.value;
        const phone = e.target.phone.value;

        // validation with regex
        const nameVelidation = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
        const streatValidation = /[,#-\/\s\!\@\$.....]/gi;
        const postalCodeValidation = /^\d{4}$/;
        const phoneValidation = /^(?:\d{2}-\d{3}-\d{3}-\d{3}|\d{11})$/gm;

        // enter here post url
        const url = '';

        // checking validation
        if (firstNname.match(nameVelidation) && lastName.match(nameVelidation) && streetAddress.match(streatValidation) &&
            zipCode.match(postalCodeValidation) && zipCode.match(postalCodeValidation) && phone.match(phoneValidation)) {
            // append all form data
            formData.append('firstNname', firstNname);
            formData.append('lastName', lastName);
            formData.append('streetAddress', streetAddress);
            formData.append('zipCode', zipCode);
            formData.append('phone', phone);
            formData.append('district', district);
            formData.append('birthDate', birthDate);
            formData.append('gender', gender);

            // reset error 
            document.getElementById("firstName").style.border = null;
            document.getElementById("lastName").style.border = null;
            document.getElementById("addressVal").style.border = null;
            document.getElementById("zipVAlidate").style.border = null;
            document.getElementById("phoneValidate").style.border = null;
            setNameError('');
            setStreetError('');
            setZipError('');
            setPhoneError('');

            // psot form data
            axios.post(url, formData)
                .then(res => {
                    alert("Successfuly added details")
                })
                .catch(err => {
                    console.log(error);
                })
        }

        // handle error
        else {
            if (!firstNname.match(nameVelidation)) {
                document.getElementById("firstName").style.border = "1px solid red";
                setNameError("Name should be alphabetic charecter");
            }
            if (!lastName.match(nameVelidation)) {
                document.getElementById("lastName").style.border = "1px solid red";
                setNameError("Name should be alphabetic charecter");
            }
            if (!streetAddress.match(streatValidation)) {
                document.getElementById("addressVal").style.border = "1px solid red";
                setStreetError("Enter valid street address");
            }
            if (!zipCode.match(postalCodeValidation)) {
                document.getElementById("zipVAlidate").style.border = "1px solid red";
                setZipError("Enter 4 digit numeric charecter")
            }
            if (!phone.match(phoneValidation)) {
                document.getElementById("phoneValidate").style.border = "1px solid red";
                setPhoneError("Enter 11 digit phone number")
            }
        }
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
                            <FormControl isRequired id="Name">
                                <FormLabel>Name</FormLabel>
                                <Flex>
                                    <Input id='firstName' name='firstNname' placeholder='First Name' marginRight='10px' type="text" />
                                    <Input id='lastName' name='lastName' placeholder='Last Name' type="text" />
                                </Flex>
                                {/* error */}
                                {nameError ? <Box color='red'>{nameError}</Box> : null}
                            </FormControl>
                            <FormControl isRequired id="Address">
                                <FormLabel>Customer Address</FormLabel>
                                <Input id='addressVal' required name='streetAddress' placeholder='Street Address' type="text" />
                                {/* error */}
                                {streetError ? <Box color='red'>{streetError}</Box> : null}
                            </FormControl>
                            <FormControl isRequired id="City" my="10px">
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
                                        {/* error */}
                                        {zipError ? <Box color='red'>{zipError}</Box> : null}
                                    </Box>
                                </Flex>
                            </FormControl>
                            <FormControl
                                isRequired
                                my="10px"
                            >
                                <Flex
                                    justify={'space-between'}
                                >
                                    <Box marginRight={{ base: "10px", md: "0px" }}>
                                        <FormLabel>Date of Birth</FormLabel>
                                        <Input max="2021-12-31" required name='birthDate' width={{ base: null, md: "185px" }} type="date" />
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
                            <FormControl
                                isRequired
                            >
                                <Box>
                                    <FormLabel>Phone</FormLabel>
                                    <Input id='phoneValidate' required name='phone' placeholder='+880 **********' type="number" />
                                    {/* error */}
                                    {phoneError ? <Box color='red'>{phoneError}</Box> : null}
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