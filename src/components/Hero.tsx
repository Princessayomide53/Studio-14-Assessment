import {
  Flex,
  Text,
  InputGroup,
  Input,
  InputLeftElement,
  Box,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import React from 'react';
import { useResources } from '../context/Resources';
import { motion } from 'framer-motion';
const MotionText = motion(Text);

const Hero = () => {
  const { searchTerm, setSearchTerm } = useResources();
  return (
    <Flex
      bg='#FAFAFA'
      direction='column'
      align='center'
      justify='center'
      minH='25rem'
      px={8}
    >
      <MotionText
        textStyle='poppins'
        fontSize={['40px', '52px']}
        fontWeight='bold'
        color='black'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Resources
      </MotionText>

      <MotionText
        textStyle='inter'
        fontWeight='normal'
        fontSize={['18px', '16px']}
        align='center'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.20 }}
      >
        Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
        commodo
        <Box as='br' display={{ base: 'none', md: 'inline' }} /> nulla facilisi
        nullam vehicula ipsum a arcu cursus vitae congue
      </MotionText>

      <InputGroup maxW='853px' pt='10'>
        <InputLeftElement pl='8' pt='69px' pointerEvents='none'>
          <SearchIcon color='#4F4F4F' fontSize='2xl' />
        </InputLeftElement>
        <Input
          placeholder='Search by title or keyword'
          height='59px'
          color='#4F4F4F'
          bg='white'
          borderRadius='10px'
          borderColor='#A1A1A1'
          fontSize={['14px', '16px']}
          pl='16'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </InputGroup>
    </Flex>
  );
};

export default Hero;
