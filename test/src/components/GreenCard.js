import { Box, Container, Heading, SimpleGrid, Text, Icon } from '@chakra-ui/core'
import { AiFillCalendar } from 'react-icons/ai'
import React from 'react'

const GreenCard = () => {
  const props = {
    passengers: ['ALEJANDRO CAMANERA', 'JENNIFER ANISTON', 'JOHN DOE'],
    etdDate: [' 27 Junio 2020 15:00 hrs', '30 Junio 2020 15:00 hrs', '20 Junio 2020 15:00 hrs'],
    passInReserv: ['4', '2', '3-M'],
    trMethod: ['OTAS', 'DIRECTO', 'AGENCIA ZAFIRO TOURS'],
  }
  return (
    <Box
      w="300px"
      borderLeft="4.5px solid #1cc88a"
      rounded="7px"
      boxShadow="0 .15rem .75rem 0"
      bg="gray.50"
      boxSizing="border-box"
    >
      <SimpleGrid columns={2}>
        <Box>
          <Container>
            <Heading as="h6" fontSize="10px" color="#1cc88a" fontWeight="bold" pt={4} pb={1}>
              LLEGADA ESTIMADA
            </Heading>
            <Box fontSize="13px">
              <Text fontWeight="semibold">{props.passengers[0]}</Text>
              <Text fontWeight="semibold">Fecha: {props.etdDate[0]}</Text>
              <Text fontWeight="semibold"># ACMPÑTS: {props.passInReserv[0]}</Text>
              <Text fontWeight="semibold">TR: {props.trMethod[0]}</Text>
            </Box>
          </Container>
        </Box>

        <Box>
          <Container>
            <Heading as="h6" fontSize="10px" color="#1cc88a" fontWeight="bold" pt={4} pb={1}>
              LLEGADA ESTIMADA
            </Heading>
            <Box fontSize="13px">
              <Text fontWeight="semibold">{props.passengers[1]}</Text>
              <Text fontWeight="semibold">Fecha: {props.etdDate[1]}</Text>
              <Text fontWeight="semibold"># ACMPÑTS: {props.passInReserv[1]}</Text>
              <Text fontWeight="semibold">TR: {props.trMethod[1]}</Text>
            </Box>
          </Container>
        </Box>

        <Box>
          <Container>
            <Heading as="h6" fontSize="10px" color="#1cc88a" fontWeight="bold" pt={4} pb={1}>
              LLEGADA ESTIMADA
            </Heading>
            <Box fontSize="13px">
              <Text fontWeight="semibold">{props.passengers[2]}</Text>
              <Text fontWeight="semibold">Fecha: {props.etdDate[2]}</Text>
              <Text fontWeight="semibold"># ACMPÑTS: {props.passInReserv[2]}</Text>
              <Text fontWeight="semibold">TR: {props.trMethod[2]}</Text>
            </Box>
          </Container>
        </Box>
        <Box d="flex" justifyContent="center" alignItems="center">
          <Icon as={AiFillCalendar} boxSize={20} color="#dddfeb" />
        </Box>
      </SimpleGrid>
    </Box>
  )
}

export default GreenCard
