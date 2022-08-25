import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  GridItem,
  Center,
  Container,
  SimpleGrid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        border='2px'
        borderColor='red'
        w={['375px', null, null, '1290px']}
        
        h={['100%', null, null, '100vh']}
        // w={['100%', null, null, '100vw']}
        
        m='auto'
        
        
      >
        <Grid 
          border='2px'
          borderColor='blue.300'
          h={[null, null, null, '518px']}
          w={['375px', null, null, '1110px']}
          templateRows={[null, null, null, 'repeat(2, 1fr)']}
          templateColumns={[null, null, null, 'repeat(4, 1fr)']}
          mx='auto'
          my='auto'
          px='auto'
          gap='1.5rem'
        >
          <GridItem
            w={['327px', null, null, '255px']}
            rowSpan={[1, null, null, 2]}
            h={['203px', null, null, '518px' ]}
            background='blue.100'
            mx='auto'
          >
          </GridItem>

          <GridItem
            w={['327px', null, null, '255px']}
            h={['160px', null, null, '244px' ]}
            border='1px'
            mx='auto'
          >
          </GridItem>

          <GridItem
            w={['327px', null, null, '255px']}
            h={['160px', null, null, '244px' ]}
            border='1px'
            mx='auto'
          >
          </GridItem>

          <GridItem
            w={['327px', null, null, '255px']}
            h={['160px', null, null, '244px' ]}
            border='1px'
            mx='auto'
          >
          </GridItem>

          <GridItem
            w={['327px', null, null, '255px']}
            h={['160px', null, null, '244px' ]}
            border='1px'
            mx='auto'
          >
          </GridItem>

          <GridItem
            w={['327px', null, null, '255px']}
            h={['160px', null, null, '244px' ]}
            border='1px'
            mx='auto'
          >
          </GridItem>

          <GridItem
            w={['327px', null, null, '255px']}
            h={['160px', null, null, '244px' ]}
            border='1px'
            mx='auto'
          >
          </GridItem>

        </Grid>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
