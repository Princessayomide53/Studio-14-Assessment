import React, { useEffect, useState } from 'react';
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
import { motion, AnimatePresence } from 'framer-motion';
import { IconButton } from '@chakra-ui/react';
import { IoFilter } from 'react-icons/io5';
import { useResources } from '../context/Resources';

const MotionBox = motion(Box);

type CustomCheckboxProps = {
  value: string;
  isChecked: boolean;
  onChange: (value: string) => void;
  children: React.ReactNode;
};

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  value,
  isChecked,
  onChange,
  children,
}) => {
  const { state, getCheckboxProps, getInputProps, getLabelProps } = useCheckbox(
    { value, isChecked, onChange: () => onChange(value) }
  );

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
        {children}
      </Box>
    </Box>
  );
};

type FilterItem = string | { label: string; id: string };

type SectionProps = {
  title: string;
  items: FilterItem[];
  selectedFilters: string[];
  toggleFilter: (filter: string) => void;
};

const Section: React.FC<SectionProps> = ({
  title,
  items,
  selectedFilters,
  toggleFilter,
}) => (
  <VStack align='start' spacing={2}>
    <Heading
      textStyle='inter'
      fontWeight='bold'
      fontSize='16px'
      color='#3F3F3F'
      mb='4'
    >
      {title}
    </Heading>

    {items.map((item, index) => {
      
const value = typeof item === 'string' ? item : item.id;
  const label = typeof item === 'string' ? item : item.label;
      return (
        <CustomCheckbox
          key={value}
          value={value}
          isChecked={selectedFilters.includes(value)}
          onChange={toggleFilter}
        >
          <Box
            fontSize='16px'
            fontWeight='normal'
            textStyle='inter'
            color='#3F3F3F'
          >
            {label}
          </Box>
        </CustomCheckbox>
      );
    })}
  </VStack>
);

const Filters: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { selectedFilters, toggleFilter } = useResources();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sections = [
    {
      title: 'Key Foundational Principles',
      items: [
        'Secure Base',
        'Sense of Appreciation',
        'Learning Organisation',
        'Mission and Vision',
        'Wellbeing',
      ],
    },
    {
      title: 'Document type',
      items: ['DOC', 'Link', 'PDF', 'Type 4', 'Video'],
    },
    {
      title: 'Categories',
      items: [     
    { label: 'Sample', id: 'sample1' },
    { label: 'Sample', id: 'sample2' },
    { label: 'Sample', id: 'sample3' },
    { label: 'Sample', id: 'sample4' },
    { label: 'Sample', id: 'sample5' },
  ],
    },
  ];

  return (
    <Stack
      direction={{ base: 'column', md: 'column' }}
      spacing={{ base: '0', lg: '12' }}
      pb='7'
    >
      <Box position='relative' w='100%'>
        {!isDesktop && (
          <HStack
            align='center'
            justify='center'
            gap={5}
            w='100%'
            px={2}
            py={2}
            borderWidth='1px'
            borderColor='gray.200'
            cursor='pointer'
            backgroundColor='#F1F1F1'
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <IconButton
              aria-label='Toggle filters'
              icon={React.createElement(IoFilter as any, { size: 32 })}
              variant='ghost'
            />
            <Text textStyle='inter' fontWeight='medium' fontSize='16px'>
              Show Filters
            </Text>
          </HStack>
        )}

        <AnimatePresence initial={false}>
          {!isDesktop && isOpen && (
            <MotionBox
              key='filters'
              bg='white'
              p={4}
              position='absolute'
              top='100%'
              left={0}
              width='100%'
              zIndex={10}
              borderRadius='sm'
              borderWidth='1px'
              borderColor='gray.200'
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              overflow='hidden'
              transition={{ duration: 0.3 }}
            >
              {sections.map((section, idx) => (
                <Box key={idx} mb={idx !== sections.length - 1 ? 6 : 0}>
                  <Section
                    title={section.title}
                    items={section.items}
                    selectedFilters={selectedFilters}
                    toggleFilter={toggleFilter}
                  />
                </Box>
              ))}
            </MotionBox>
          )}
        </AnimatePresence>
      </Box>
      <VStack align='start'>
        {isDesktop && (
          <>
            <Text textStyle='inter' fontWeight='bold' fontSize='16px' pb='1.5' pl='5' mt={{ md: -6, lg:-20}}>
              Filters
            </Text>
            <Divider width='271px' borderColor='#E0E0E0' />
            {sections.map((section, idx) => (
              <Box key={idx} mb={idx !== sections.length - 1 ? 6 : 0} mt={3}>
                <Section
                  title={section.title}
                  items={section.items}
                  selectedFilters={selectedFilters}
                  toggleFilter={toggleFilter}
                />
              </Box>
            ))}
          </>
        )}
      </VStack>
    </Stack>
  );
};

export default Filters;
