import { Box, Container, Heading, Flex, Text } from '@chakra-ui/core'
import React from 'react'
const BlueCard = () => {
  const props = {
    passengers: ['ALEJANDRO CAMANERA', 'JENNIFER ANISTON', 'JOHN DOE'],
    etaDate: 'Fecha: 17 Junio 2020 13:00 hrs',
    passInReserv: ['4', '2', '3-M'],
    trMethod: ['OTAS', 'DIRECTO', 'AGENCIA ZAFIRO TOURS'],
  }
  return (
    <Box
      w="300px"
      borderLeft="4.5px solid rgb(78, 115, 223)"
      rounded="7px"
      boxShadow="2xl"
      bg="gray.50"
      boxSizing="border-box"
    >
      <Flex wrap="wrap" spacing={10} py={2} px={1}>
        <Box>
          <Container>
            <Heading
              as="h6"
              pt={2}
              pb={1}
              fontSize="10px"
              color="rgb(78, 115, 223)"
              fontWeight="bold"
            >
              LLEGADA ESTIMADA
            </Heading>
            <Box fontSize="13px">
              <Text fontWeight="semibold">{props.passengers[0]}</Text>
              <Text fontWeight="semibold">{props.etaDate}</Text>
              <Text fontWeight="semibold"># ACMPÑTS: {props.passInReserv[0]}</Text>
              <Text fontWeight="semibold">TR: {props.trMethod[0]}</Text>
            </Box>
          </Container>
        </Box>

        <Box>
          <Container>
            <Heading
              as="h6"
              pb={1}
              pt={3}
              fontSize="10px"
              color="rgb(78, 115, 223)"
              fontWeight="bold"
            >
              LLEGADA ESTIMADA
            </Heading>
            <Box fontSize="13px">
              <Text fontWeight="semibold">{props.passengers[1]}</Text>
              <Text fontWeight="semibold">{props.etaDate}</Text>
              <Text fontWeight="semibold"># ACMPÑTS: {props.passInReserv[1]}</Text>
              <Text fontWeight="semibold">TR: {props.trMethod[1]}</Text>
            </Box>
          </Container>
        </Box>

        <Box>
          <Container>
            <Heading
              as="h6"
              pb={1}
              pt={3}
              fontSize="10px"
              color="rgb(78, 115, 223)"
              fontWeight="bold"
            >
              LLEGADA ESTIMADA
            </Heading>
            <Box fontSize="13px">
              <Text fontWeight="semibold">{props.passengers[2]}</Text>
              <Text fontWeight="semibold">{props.etaDate}</Text>
              <Text fontWeight="semibold"># ACMPÑTS: {props.passInReserv[2]}</Text>
              <Text fontWeight="semibold">TR: {props.trMethod[2]}</Text>
            </Box>
          </Container>
        </Box>
      </Flex>
    </Box>
  )
}

export default BlueCard
