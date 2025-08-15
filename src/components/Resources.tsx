import { Flex, Box, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import Filters from './Filters';
import { useResources } from '../context/ResourcesCtx';
import { motion } from 'framer-motion';


const MotionBox = motion(Box);
const Resources = () => {
  const { filteredResources } = useResources();

 const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      maxW={{ base: '100%', md: '62em', lg: '80em', xl: '80em' }}
      mx='auto'
      px={{ base: '0', md: '6' }}
      gap={8}
      mt={{ base: 0, md: 14 ,lg: 20 }}
    >
      <Box flex='1' maxW={{ base: '100%', md: '300px' }}>
        <Filters />
      </Box>

      <MotionBox
        flex='3'
        width='100%'
        initial='hidden'
        animate='visible'
        variants={containerVariants}
      >
      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 3 }}
        height={{base: '100%', md: '280px'}}
        spacingX={8}
        spacingY={8}
        flex='3'
        justifyItems={{ base: 'center', lg: 'stretch' }}
        pb={{ base: 10, md: 7 }}

      >
        {filteredResources.map((card, index) => {
          return (
            <MotionBox
              key={index}
              position='relative'
              bg='white'
              borderRadius='10px'
              boxShadow='md'
              width={{base: '325px', xs:'280px', md: '264px'}}
              height='280px'
              overflow='hidden'
              px={{base: '12px', md: '0'}}
              _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)' }}
              transition={{duration: 0.2, ease: "easeInOut"}}
              variants={cardVariants}
            >
              <Box
                as='figure'
                position='absolute'
                top={-3}
                bottom={0}
                left={index === 5 ? '24px' : index === 4 ? '-45px' : '' }
                right={index === 1 ? '9' : index === 3 ? '16px'  : index === 0 || index === 2 ? '0px' : ''}
                height={index === 5 ? '45%' : '40%'}
              >
                <img
                  src={card.img}
                  alt='card background'
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>

              
              <Box position="absolute" top="42px" left="25px" zIndex={2}>
              {card.icon
              ? React.createElement(card.icon as any, { size: 32, color: 'black' })
              : null}
              </Box>

              <Box position='relative' zIndex={1} p={{base: 4, md: 7}} pt={{base: '48%', md: '45%'}}>
                <Text
                  fontSize='18px'
                  textStyle='poppins'
                  fontWeight='bold'
                  mb={2}
                  mt={index === 5 ? '-7' : ''}
                >
                  {card.title}
                </Text>
                <Text
                  fontSize='14px'
                  textStyle='inter'
                  lineHeight='25px'
                  fontWeight='normal'
                  mb={3}
                  color='#828282'
                >
                  {card.text}
                </Text>
                <Box
                  textStyle='inter'
                  fontSize='12px'
                  fontWeight='medium'
                  color='#222222'
                  bg='#F2F2F2'
                  width='94px'
                  height='24px'
                  borderRadius='10'
                  textAlign='center'
                  py='1'
                  mt='5px'
                >
                  {card.description}
                </Box>
              </Box>
            </MotionBox>
          );
        })}
      </SimpleGrid>
      </MotionBox>
    </Flex>
  );
};

export default Resources;
