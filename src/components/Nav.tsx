import React from 'react';
import {
  Flex,
  Box,
  HStack,
  Divider,
  Link,
  Text,
  Center,
  IconButton,
} from '@chakra-ui/react';
import Logo from '../assets/Svgs/Logo.svg';
import { useColorMode, ChevronDownIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Switch } from '@chakra-ui/react';

const Nav = () => {
  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      wrap='wrap'
      padding={7}
      bg='white'
      boxShadow='md'
    >
      <HStack spacing={3} align='center'>
        <img src={Logo} alt='Logo' />
        <Text
          fontSize='23px'
          fontWeight='extrabold'
          color='black'
          textStyle='inter'
        >
          LOGO
        </Text>
      </HStack>

      <HStack
        spacing={8}
        fontSize='14px'
        display={{ base: 'none', md: 'flex' }}
      >
        <Link
          href='#dashboard'
          fontSize='xl'
          fontWeight='medium'
          textStyle='poppins'
        >
          Dashboard
        </Link>
        <Link
          href='#resources'
          fontSize='xl'
          fontWeight='medium'
          textStyle='poppins'
        >
          Resources
        </Link>
        <Link
          href='#toolkit'
          fontSize='xl'
          fontWeight='medium'
          textStyle='poppins'
        >
          Toolkit
        </Link>
      </HStack>

      <HStack spacing='4'>
        <Switch colorScheme='blue' size='lg' isChecked />
        <Text fontSize='xl' fontWeight='medium' color='black' textStyle='inter'>
          Switch to Employee
        </Text>

        <Divider orientation='vertical' height='25px' borderColor='#E4E4E4' />
        <HStack spacing={2}>
          <Box
            bg='#17E4A1'
            color='black'
            w='33px'
            h='33px'
            borderRadius='full'
            display='flex'
            fontSize='12px'
            alignItems='center'
            justifyContent='center'
            fontWeight='extrabold'
            textStyle='poppins'
          >
            JA
          </Box>
          <Text fontSize='16px' fontWeight='semibold' textStyle='poppins'>
            Jonathan
          </Text>
          <IconButton
            aria-label='Profile menu'
            icon={<ChevronDownIcon />}
            size='md'
            variant='ghost'
          />
        </HStack>
      </HStack>
    </Flex>
  );
};

export default Nav;
