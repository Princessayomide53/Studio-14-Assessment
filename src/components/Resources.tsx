import { Flex, Box, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import Filters from './Filters';

import { useResources } from '../context/Resources';
const Resources = () => {
  const { filteredResources } = useResources();

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      maxW={{ base: '100%', md: '62em', lg: '80em', xl: '80em' }}
      mx='auto'
      px={{ base: '0', md: '6' }}
      gap={8}
      mt={{ base: 0, md: 14 }}
    >
      <Box flex='1' maxW={{ base: '100%', md: '300px' }}>
        <Filters />
      </Box>

      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 3 }}
        height='280px'
        spacingX={8}
        spacingY={8}
        flex='3'
        justifyItems={{ base: 'center', lg: 'stretch' }}
        pb={{ base: '10', md: '7' }}
      >
        {filteredResources.map((card, index) => {
          // const Icon = card.icon;
          return (
            <Box
              key={index}
              position='relative'
              bg='white'
              borderRadius='10px'
              boxShadow='md'
              width='264px'
              height='280px'
              overflow='hidden'
              _hover={{ boxShadow: 'lg', transform: 'translateY(-4px)' }}
              transition='all 0.2s ease'
            >
              <Box
                as='figure'
                position='absolute'
                top={-3}
                bottom={0}
                left={index === 5 ? '24' : ''}
                right={index === 1 ? '9' : 'auto'}
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

              <Box position='absolute' top='42px' left='25px' zIndex={2}>
                {/* <Icon size={32} color='black' /> */}
              </Box>
              <Box position='relative' zIndex={1} p={7} pt='42%'>
                <Text
                  fontSize='18px'
                  textStyle='poppins'
                  fontWeight='bold'
                  mb={2}
                  mt={index === 5 ? '-5' : ''}
                >
                  {card.title}
                </Text>
                <Text
                  fontSize='14px'
                  textStyle='inter'
                  lineHeight='25px'
                  fontWeight='normal'
                  mb={2}
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
                  borderRadius='9'
                  textAlign='center'
                  py='1'
                >
                  {card.description}
                </Box>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};

export default Resources;
