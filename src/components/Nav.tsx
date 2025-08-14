import React, { useState } from 'react';
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
import { Twirl as Hamburger } from 'hamburger-react';

const Nav = () => {
  const [nav, setNav] = useState(false);

  return (
    <Flex as='nav' bg='white' boxShadow='md' px={7} py={5}>
      <Flex
        align='center'
        justify='space-between'
        wrap='wrap'
        maxW={{ base: '100%', sm: '48em', md: '64em', lg: '75em', xl: '87em' }}
        mx='auto'
        w='100%'
      >
        <HStack spacing={3} align='center'>
          <img src={Logo} alt='Logo' />
          <Text
            fontSize={{
              base: '23px',
              xs: '14px',
              sm: '14px',
              md: '16px',
              lg: '18px',
              xl: '23px',
            }}
            fontWeight='extrabold'
            color='black'
            textStyle='inter'
          >
            LOGO
          </Text>
        </HStack>

        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          <Link
            href='#dashboard'
            fontSize={['12px', '14px']}
            fontWeight='medium'
            textStyle='poppins'
          >
            Dashboard
          </Link>
          <Link
            href='#resources'
            fontSize={['12px', '14px']}
            fontWeight='medium'
            textStyle='poppins'
          >
            Resources
          </Link>
          <Link
            href='#toolkit'
            fontSize={['12px', '14px']}
            fontWeight='medium'
            textStyle='poppins'
          >
            Toolkit
          </Link>
        </HStack>

        <HStack spacing='4'>
          <Switch colorScheme='blue' size='md' isChecked />
          <Text
            display={{ base: 'none', md: 'flex' }}
            fontSize={['12px', '14px']}
            fontWeight='medium'
            color='black'
            textStyle='inter'
          >
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
            <Text
              fontSize={['12px', '14px', '16px']}
              fontWeight='semibold'
              textStyle='poppins'
              display={{ base: 'none', md: 'flex' }}
            >
              Jonathan
            </Text>
            <IconButton
              aria-label='Profile menu'
              icon={<ChevronDownIcon />}
              size='md'
              variant='ghost'
              display={{ base: 'none', md: 'flex' }}
            />
          </HStack>
          <Box display={{ base: 'flex', md: 'none' }}>
            <Hamburger
              direction='right'
              size={28}
              color='black'
              toggled={nav}
              toggle={() => setNav(!nav)}
            />
          </Box>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Nav;
