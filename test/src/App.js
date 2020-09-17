import React from 'react'
import { CSSReset, Flex, Grid, Box, Stack } from '@chakra-ui/core'
import BlueCard from './components/BlueCard'
import GreenCard from './components/GreenCard'
import Chart from './components/Chart'
import ImgCard from './components/ImgCard'

const App = () => {
  return (
    <>
      <CSSReset />
      <Box bg="gray.300">
        {/* Dummie NavBar */}

        <Box bg="cyan.800" py={4} color="white">
          <Stack>
            <Box maxW="700px" marginX="auto" fontSize="4xl" textAlign="center">
              Components
            </Box>
          </Stack>
        </Box>
        <Grid templateColumns="repeat(2, 2fr)" gap={4} px={10} py={5}>
          <BlueCard />
          <GreenCard />
          <Chart />
          <ImgCard />
        </Grid>
      </Box>
    </>
  )
}

export default App
