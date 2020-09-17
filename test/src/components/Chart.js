import { Box, Text, Heading, Slider, SliderFilledTrack, SliderTrack } from '@chakra-ui/core'
import React from 'react'

const Chart = () => {
  return (
    <Box w="500px" rounded="7px" alignItems="center" overflow="hidden" boxShadow="2xl">
      <Heading as="h5" h="50px" size="s" pl={5} bg="#f8f9fc" d="flex" alignItems="center">
        Proyectos
      </Heading>
      <Box bg="white" px={5} pb={8}>
        <Box mb={2} pb={4}>
          <Box fontSize="11px" d="flex" justifyContent="space-between" pt={2}>
            <Text as="samp">Proyecto 1</Text>
            <Text as="em">20%</Text>
          </Box>
          <Slider colorScheme="red" defaultValue={20} isReadOnly>
            <SliderTrack h="15px" rounded={5}>
              <SliderFilledTrack />
            </SliderTrack>
          </Slider>
        </Box>

        <Box mb={2} pb={4}>
          <Box fontSize="11px" d="flex" justifyContent="space-between" pt={2}>
            <Text as="samp">Proyecto 1</Text>
            <Text as="em">20%</Text>
          </Box>
          <Slider colorScheme="red" defaultValue={20} isReadOnly>
            <SliderTrack h="15px" rounded={5}>
              <SliderFilledTrack />
            </SliderTrack>
          </Slider>
        </Box>

        <Box mb={2} pb={4}>
          <Box fontSize="11px" d="flex" justifyContent="space-between" pt={2}>
            <Text as="samp">Proyecto 1</Text>
            <Text as="em">20%</Text>
          </Box>
          <Slider colorScheme="red" defaultValue={20} isReadOnly>
            <SliderTrack h="15px" rounded={5}>
              <SliderFilledTrack />
            </SliderTrack>
          </Slider>
        </Box>

        <Box mb={2} pb={4}>
          <Box fontSize="11px" d="flex" justifyContent="space-between" pt={2}>
            <Text as="samp">Proyecto 1</Text>
            <Text as="em">20%</Text>
          </Box>
          <Slider colorScheme="red" defaultValue={20} isReadOnly>
            <SliderTrack h="15px" rounded={5}>
              <SliderFilledTrack />
            </SliderTrack>
          </Slider>
        </Box>

        <Box mb={2} pb={4}>
          <Box fontSize="11px" d="flex" justifyContent="space-between" pt={2}>
            <Text as="samp">Proyecto 1</Text>
            <Text as="em">20%</Text>
          </Box>
          <Slider colorScheme="red" defaultValue={20} isReadOnly>
            <SliderTrack h="15px" rounded={5}>
              <SliderFilledTrack />
            </SliderTrack>
          </Slider>
        </Box>
      </Box>
    </Box>
  )
}

export default Chart
