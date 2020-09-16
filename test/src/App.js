import React from 'react'
import { CSSReset, Flex } from '@chakra-ui/core'
import Card from './components/Card'

const App = () => {
  return (
    <>
      <Flex justify="center">
        <CSSReset />
        <Card />
        <Card />
      </Flex>
    </>
  )
}

export default App
