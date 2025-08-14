import {
  Flex,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import React from 'react';

const Hero = () => {
  return (
    <Flex
      bg='#F2F2F2'
      direction='column'
      align='center'
      justify='center'
      minH='25rem'
      px={8}
    >
      <Text textStyle='poppins' fontSize='52px' fontWeight='bold' color='black'>
        Resources
      </Text>

      <Text
        textStyle='inter'
        fontWeight='normal'
        fontSize='16px'
        align='center'
      >
        Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet
        commodo
        <br /> nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue
      </Text>

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
          size='lg'
          pl='16'
        />
      </InputGroup>
    </Flex>
  );
};

export default Hero;
