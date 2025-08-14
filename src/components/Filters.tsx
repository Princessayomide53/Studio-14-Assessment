import React from 'react';
import {
  Box,
  Stack,
  Heading,
  VStack,
  useCheckbox,
  Text,
  Divider,
  HStack,
} from '@chakra-ui/react';

type CustomCheckboxProps = {
  value: string;
  children: React.ReactNode;
};

const CustomCheckbox: React.FC<CustomCheckboxProps> = (props) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps } =
    useCheckbox(props);

  return (
    <Box as='label' display='flex' alignItems='center'>
      <input {...getInputProps()} hidden />
      <Box
        {...getCheckboxProps()}
        cursor='pointer'
        display='flex'
        alignItems='center'
        justifyContent='center'
        borderWidth='1px'
        borderRadius='sm'
        boxSize='20px'
        mr='2'
        bg={state.isChecked ? 'black' : 'white'}
        borderColor={state.isChecked ? 'black' : 'gray.400'}
      />
      <Box as='span' {...getLabelProps()}>
        {props.children}
      </Box>
    </Box>
  );
};

type SectionProps = {
  title: string;
  items: string[];
};

const Section: React.FC<SectionProps> = ({ title, items }) => (
  <VStack align='start' spacing={2}>
    <Heading
      textStyle='inter'
      fontWeight='bold'
      fontSize='16px'
      color='#3F3F3F'
      mb='5'
    >
      {title}
    </Heading>
    {items.map((item, index) => (
      <CustomCheckbox key={index} value={item}>
        <Box
          fontSize='16px'
          fontWeight='normal'
          textStyle='inter'
          color='#3F3F3F'
        >
          {item}{' '}
        </Box>
      </CustomCheckbox>
    ))}
  </VStack>
);

const Filters: React.FC = () => {
  const sections = [
    {
      title: 'Key Foundational Principles',
      items: [
        'Secure Base',
        'Sense of Appreciation',
        'Learning Organisation',
        'Mission and Vision',
        'Mission and Vision',
      ],
    },
    {
      title: 'Document type',
      items: ['DOC', 'Link', 'PDF', 'Type 4', 'Video'],
    },
    {
      title: 'Categories',
      items: ['Sample', 'Sample', 'Sample', 'Sample', 'Sample'],
    },
  ];

  return (
    <Stack direction={{ base: 'column', md: 'column' }} spacing={12} pb='7'>
      <VStack align='start'>
        <Text textStyle='inter' fontWeight='bold' fontSize='16px' pb='3' pl='7'>
          Filters
        </Text>
        <Divider orientation='horizontal' width='271px' borderColor='#E0E0E0' />
      </VStack>

      {sections.map((section, idx) => (
        <Section key={idx} title={section.title} items={section.items} />
      ))}
    </Stack>
  );
};

export default Filters;
