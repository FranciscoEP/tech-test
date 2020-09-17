import { Box, Text, Heading, Slider, SliderFilledTrack, SliderTrack } from '@chakra-ui/core'
import React from 'react'

const Chart = () => {
  return (
    <Box w="500px" rounded="7px" alignItems="center" overflow="hidden" boxShadow="2xl">
      <Heading
        as="h5"
        h="50px"
        size="s"
        pl={5}
        bg="#f8f9fc"
        d="flex"
        alignItems="center"
        color="#4e73df"
      >
        Proyectos
      </Heading>
      <Box bg="white" px={6} pb={8} color="#858796" fontWeight="bold">
        <Box mb={2} pb={4}>
          <Box fontSize="11px" d="flex" justifyContent="space-between" pt={2}>
            <Text as="p">Proyecto 1</Text>
            <Text as="p">20%</Text>
          </Box>
          <Slider colorScheme="red" defaultValue={20} isReadOnly>
            <SliderTrack h="15px" rounded={5}>
              <SliderFilledTrack />
            </SliderTrack>
          </Slider>
        </Box>

        <Box mb={2} pb={4}>
          <Box fontSize="11px" d="flex" justifyContent="space-between" pt={2}>
            <Text as="p">Proyecto 2</Text>
            <Text as="p">40%</Text>
          </Box>
          <Slider colorScheme="yellow" defaultValue={40} isReadOnly>
            <SliderTrack h="15px" rounded={5}>
              <SliderFilledTrack />
            </SliderTrack>
          </Slider>
        </Box>

        <Box mb={2} pb={4}>
          <Box fontSize="11px" d="flex" justifyContent="space-between" pt={2}>
            <Text as="p">Proyecto 3</Text>
            <Text as="p">60%</Text>
          </Box>
          <Slider colorScheme="blue" defaultValue={60} isReadOnly>
            <SliderTrack h="15px" rounded={5}>
              <SliderFilledTrack />
            </SliderTrack>
          </Slider>
        </Box>

        <Box mb={2} pb={4}>
          <Box fontSize="11px" d="flex" justifyContent="space-between" pt={2}>
            <Text as="p">Proyecto 1</Text>
            <Text as="p">20%</Text>
          </Box>
          <Slider colorScheme="cyan" defaultValue={80} isReadOnly>
            <SliderTrack h="15px" rounded={5}>
              <SliderFilledTrack />
            </SliderTrack>
          </Slider>
        </Box>

        <Box mb={2} pb={2}>
          <Box fontSize="11px" d="flex" justifyContent="space-between" pt={2}>
            <Text as="p">Altas del proyecto</Text>
            <Text as="p">¡Listo!</Text>
          </Box>
          <Slider colorScheme="green" defaultValue={100} isReadOnly>
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
