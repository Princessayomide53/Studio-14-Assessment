import React, { useState } from 'react';
import {
  Flex,
  Box,
  HStack,
  Divider,
  Link,
  Text,
  IconButton,
  VStack,
  chakra,
} from '@chakra-ui/react';
import Logo from '../assets/Svgs/Logo.svg';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { Switch } from '@chakra-ui/react';
import { Twirl as Hamburger } from 'hamburger-react';
import { useResources } from '../context/Resources';
import { useLocation } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';


const Nav = () => {
  const [nav, setNav] = useState(false);
  const { role, setRole, activePage, setActivePage } = useResources();
  const MotionBox = chakra(motion.div);
  const location = useLocation();

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
    { id: 'dashboards', label: 'Dashboard', links: '/dashboard' },
    { id: 'resources', label: 'Resources', links: '/' },
    { id: 'toolkit', label: 'Toolkit', links: '/toolkit' },
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
        py={4}
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
            {navLink.map((link) => (
              <Box
                key={link.id}
                fontSize={['12px', '14px']}
                fontWeight='medium'
                textStyle='poppins'
                color={location.pathname === link.links ? 'blue.500' : 'black'}
                position='relative'
                _after={{
                  content: '""',
                  position: 'absolute',
                  top: '43px',
                  left: 0,
                  width: '100%',
                  height: '3px',
                  bg:
                    location.pathname === link.links
                      ? '#3182ce'
                      : 'transparent',
                }}
              >
                <Link
                  href={link.links}
                  fontSize={['12px', '14px']}
                  fontWeight='medium'
                  textStyle='poppins'
                  pb='20'
                  color={
                    location.pathname === link.links ? 'blue.500' : 'black'
                  }
                  textDecoration="none"        
  _hover={{ textDecoration: 'none' }}
                >
                  {link.label}
                </Link>
              </Box>
            ))}
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
            zIndex={20}
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
                  as={RouterLink}   
                to={link.links}
                onClick={() => setNav(false)}
                  fontWeight='medium'
                  color={location.pathname === link.links ? 'blue.500' : 'black'}
                  borderBottom={location.pathname === link.links ? '2px solid #314EF9' : 'none'}
                   pb={location.pathname === link.links ? '2px' : '0'}
                  
                  textAlign='center'
                  mb='3'
                >
                  {link.label}
                </Link>
              </MotionBox>
            ))}
          </VStack>
        )}
      </Flex>
    </Box>
  );
};

export default Nav;
