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
  VStack,
  chakra,
} from '@chakra-ui/react';
import Logo from '../assets/Svgs/Logo.svg';
import { useColorMode, ChevronDownIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { Switch } from '@chakra-ui/react';
import { Twirl as Hamburger } from 'hamburger-react';
import { useResources } from '../context/Resources';
import Employee from '../Routes/Employee';
import Home from '../Routes/Home';

const Nav = () => {
  const [nav, setNav] = useState(false);
  const { role, setRole, activePage, setActivePage } = useResources();
  const MotionBox = chakra(motion.div);

  const containerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  const navLink = [
    { id: 'dashboards', label: 'Dashboard' },
    { id: 'resources', label: 'Resources' },
    { id: 'toolkit', label: 'Toolkit' },
  ];

  const handleRoleToggle = () => {
    setRole(role === 'employer' ? 'employee' : 'employer');
  };

  return (
    <Box>
      <Flex
        as='nav'
        bg='white'
        boxShadow='md'
        px={7}
        py={5}
        position='relative'
      >
        {/* desktop */}
        <Flex
          align='center'
          justify='space-between'
          wrap='wrap'
          maxW={{
            base: '100%',
            sm: '48em',
            md: '64em',
            lg: '75em',
            xl: '87em',
          }}
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
              // color={activePage === link.id ? 'blue.500' : 'black'}
              // borderBottom={activePage === link.id ? '2px solid #3182ce' : 'none'}
              // pb={activePage === link.id ? '2px' : '0'}
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
            <Switch
              colorScheme='blue'
              size='md'
              isChecked={role === 'employee'}
              onChange={handleRoleToggle}
            />
            <Text
              display={{ base: 'none', md: 'flex' }}
              fontSize={['12px', '14px']}
              fontWeight='medium'
              color='black'
              textStyle='inter'
            >
              Switch to {role === 'employer' ? 'Employee' : 'Employer'}
            </Text>

            <Divider
              orientation='vertical'
              height='25px'
              borderColor='#E4E4E4'
            />
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
            {/* hamburger */}
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

        {/* small screen */}
        {nav && (
          <VStack
            as={motion.div}
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            bg='white'
            position='absolute'
            top='70px'
            left='0'
            w='100%'
            py={6}
            boxShadow='md'
            display={{ md: 'none' }}
            align='center'
            justify='center'
            textStyle='poppins'
          >
            {navLink.map((link) => (
              <MotionBox
                key={link.id}
                variants={itemVariants}
                w='full'
                display='flex'
                justifyContent='center'
              >
                <Link
                  onClick={() => {
                    setActivePage(link.id);
                    setNav(false);
                  }}
                  fontWeight='medium'
                  color={activePage === link.id ? 'blue.500' : 'black'}
                  borderBottom={
                    activePage === link.id ? '2px solid #3182ce' : 'none'
                  }
                  pb={activePage === link.id ? '2px' : '0'}
                  textAlign='center'
                  w='full'
                  mb='3'
                >
                  {link.label}
                </Link>
              </MotionBox>
            ))}
          </VStack>
        )}
      </Flex>
      <Box mt={6}>{role === 'employer' ? <Home /> : <Employee />}</Box>
    </Box>
  );
};

export default Nav;
