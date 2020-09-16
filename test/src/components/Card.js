import { Box, Container, Heading, SimpleGrid, Text } from '@chakra-ui/core'
import React from 'react'
const Card = () => {
  const props = {
    passengers: ['ALEJANDRO CAMANERA', 'JENNIFER ANISTON', 'JOHN DOE'],
    etaDate: 'Fecha: 17 de Junio 2020 13:00 hrs',
    passInReserv: ['4', '2', '3-M'],
    trMethod: ['OTAS', 'AGENCIA ZAFIRO TOURS'],
  }
  return (
    <Box
      w="380px"
      borderLeft="5px solid rgb(78, 115, 223)"
      borderRadius="5.6px"
      boxShadow="0 .15rem .75rem 0"
    >
      <SimpleGrid columns={2} spacing={6}>
        <Container>
          <Heading as="h6" fontSize="11px" color="rgb(78, 115, 223)" fontWeight="semibold">
            LLEGADA ESTIMADA
          </Heading>
          <Text fontWeight="semibold" fontSize="m">
            {props.passengers[0]}
          </Text>
          <Text fontWeight="semibold">{props.etaDate}</Text>
          <Text fontWeight="semibold"># ACMPÑTS: {props.passInReserv[0]}</Text>
          <Text fontWeight="semibold">TR: {props.trMethod[0]}</Text>
        </Container>
        <Container>
          <Heading as="h6" fontSize="11px" color="rgb(78, 115, 223)" fontWeight="semibold">
            LLEGADA ESTIMADA
          </Heading>
          <Text fontWeight="semibold">{props.passengers[1]}</Text>
          <Text fontWeight="semibold">{props.etaDate}</Text>
          <Text fontWeight="semibold"># ACMPÑTS: {props.passInReserv[1]}</Text>
          <Text fontWeight="semibold">TR: {props.trMethod[0]}</Text>
        </Container>
        <Container>
          <Heading as="h6" fontSize="11px" color="rgb(78, 115, 223)" fontWeight="semibold">
            LLEGADA ESTIMADA
          </Heading>
          <Text fontWeight="semibold">{props.passengers[2]}</Text>
          <Text fontWeight="semibold">{props.etaDate}</Text>
          <Text fontWeight="semibold"># ACMPÑTS: {props.passInReserv[2]}</Text>
          <Text fontWeight="semibold">TR: {props.trMethod[1]}</Text>
        </Container>
      </SimpleGrid>
    </Box>
  )
}

export default Card
