import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/core'
import React from 'react'

const GreenCard = () => {
  const props = {
    passengers: ['ALEJANDRO CAMANERA', 'JENNIFER ANISTON', 'JOHN DOE'],
    etdDate: [' 27 de Junio 2020 15:00 hrs', '30 Junio 2020 15:00 hrs', '20 Junio 2020 15:00 hrs'],
    passInReserv: ['4', '2', '3-M'],
    trMethod: ['OTAS', 'DIRECTO', 'AGENCIA ZAFIRO TOURS'],
  }
  return (
    <Box w="380px" borderLeft="4.5px solid #1cc88a" rounded="10px" boxShadow="0 .15rem .75rem 0">
      <SimpleGrid columns={2} spacing={6}>
        <Container>
          <Heading as="h6" fontSize="11px" color="#1cc88a" fontWeight="semibold">
            LLEGADA ESTIMADA
          </Heading>
          <Text fontWeight="semibold" fontSize="m">
            {props.passengers[0]}
          </Text>
          <Text fontWeight="semibold">{props.etdDate[0]}</Text>
          <Text fontWeight="semibold"># ACMPÑTS: {props.passInReserv[0]}</Text>
          <Text fontWeight="semibold">TR: {props.trMethod[0]}</Text>
        </Container>
        <Container>
          <Heading as="h6" fontSize="11px" color="#1cc88a" fontWeight="semibold">
            LLEGADA ESTIMADA
          </Heading>
          <Text fontWeight="semibold">{props.passengers[1]}</Text>
          <Text fontWeight="semibold">Fecha: {props.etdDate[1]}</Text>
          <Text fontWeight="semibold"># ACMPÑTS: {props.passInReserv[1]}</Text>
          <Text fontWeight="semibold">TR: {props.trMethod[1]}</Text>
        </Container>
        <Container>
          <Heading as="h6" fontSize="11px" color="#1cc88a" fontWeight="semibold">
            LLEGADA ESTIMADA
          </Heading>
          <Text fontWeight="semibold">{props.passengers[2]}</Text>
          <Text fontWeight="semibold">Fecha: {props.etdDate[2]}</Text>
          <Text fontWeight="semibold"># ACMPÑTS: {props.passInReserv[2]}</Text>
          <Text fontWeight="semibold">TR: {props.trMethod[2]}</Text>
        </Container>
      </SimpleGrid>
    </Box>
  )
}

export default GreenCard
