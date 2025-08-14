import { Flex, Box, Grid, SimpleGrid, Text, Tag } from '@chakra-ui/react';
import React from 'react';
import Filters from './Filters';
import red from '../assets/Svgs/red.svg';
import yellow from '../assets/Svgs/yellow.svg';
import green from '../assets/Svgs/green.svg';
import orange from '../assets/Svgs/orange.svg';
import blue from '../assets/Svgs/blue.svg';
import { PiFilePdfDuotone, PiVideo, PiLinkBold } from 'react-icons/pi';
const Resources = () => {
  const content = [
    {
      id: 1,
      icon: <PiLinkBold size={32} color='black' />,
      img: red,
      title: 'The ultimate guide to Workplace Chat',
      text: 'Sample Topic',
      description: 'Secure Base',
    },
    {
      id: 2,
      icon: <PiVideo size={32} color='black' />,
      img: green,
      title: 'The ultimate guide to Workplace Chat',
      text: 'Sample Topic',
      description: 'Secure Base',
    },
    {
      id: 3,
      icon: <PiLinkBold size={32} color='black' />,

      img: red,
      title: 'The ultimate guide to Workplace Chat',
      text: 'Sample Topic',
      description: 'Secure Base',
    },
    {
      id: 4,
      img: orange,
      icon: <PiVideo size={32} color='black' />,
      title: 'The ultimate guide to Workplace Chat',
      text: 'Sample Topic',
      description: 'Wellbeing',
    },
    {
      id: 5,
      img: yellow,
      icon: <PiFilePdfDuotone size={32} color='black' />,
      title: 'The ultimate guide to Workplace Chat',
      text: 'Sample Topic',
      description: 'Secure Base',
    },
    {
      id: 6,
      img: blue,
      icon: <PiFilePdfDuotone size={32} color='black' />,
      title: 'Taking stock of mental health in your workplace',
      text: 'Sample Topic',
      description: 'Secure Base',
    },
  ];
  return (
    <Flex
      direction='row'
      maxW={{ base: '100%', sm: '48em', md: '64em', lg: '80em', xl: '80em' }}
      mx='auto'
      px={6}
      gap={8}
      mt='14'
    >
      <Box flex='1' maxW='300px'>
        <Filters />
      </Box>

      <SimpleGrid
        columns={{ base: 1, sm: 2, lg: 3 }}
        height='280px'
        spacingX={8}
        spacingY={8}
      >
        {content.map((card, index) => (
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
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </Box>
            <Box position='absolute' top='42px' left='25px' zIndex={2}>
              {card.icon}
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
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Resources;
