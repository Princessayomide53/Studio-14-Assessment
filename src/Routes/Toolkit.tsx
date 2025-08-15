import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import Resources from '../components/Resources';
import { motion } from 'framer-motion';
import { useResources } from '../context/Resources';
import Employee from './Employee';
const MotionText = motion(Text);


const Toolkit = () => {
  const { role } = useResources();

  if (role === 'employee') {
    return <Employee />;
  }
  return (
    <Box px={{ base: 0, md: 8 }} py={{ base: 6, md: 12 }}>
      <Flex justify="center" mb={8}>
        <MotionText
          textAlign="center"
          fontSize={{ base: '3xl', md: '6xl' }} 
          fontWeight="bold"
          textStyle="poppins"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          mt={24}
        >
          TOOLKIT
        </MotionText>
      </Flex>

      <Resources />
    </Box>
  );
};

export default Toolkit;
