import React from 'react'

import { Box, Image, Text, Heading } from '@chakra-ui/core'

const ImgCard = () => {
  const prop = {
    imageUrl:
      'https://res.cloudinary.com/pakilloep/image/upload/v1600313744/HPosadaTepozteco_uvahsd.jpg',
    imageAlt: 'Rear view of modern home with pool',
    title: 'Ilustraciones',
  }

  return (
    <Box
      w="600px"
      border="1px solid #e3e6f0"
      rounded="7px"
      bg="white"
      overflow="hidden"
      boxShadow="2xl"
    >
      <Heading
        color="#4e73df"
        size="s"
        as="h5"
        h="50px"
        bg="#f8f9fc"
        pl={5}
        d="flex"
        alignItems="center"
      >
        {prop.title}
      </Heading>

      <Box d="flex" justifyContent="center" alignItems="center" pt={10}>
        <Image
          src={prop.imageUrl}
          alt={prop.imageAlt}
          objectFit="contain"
          w="300px"
          display="flex"
          justifyContent="center"
        />
      </Box>
      <Box p="6">
        <Box d="flex" alignItems="baseline" pb={5}>
          <Text as="p" color="#4e73df" fontWeight="semibold">
            <a href="https://undraw.co/"> Colección </a>
          </Text>
          <Text fontSize="s">&nbsp; Imágenes, Collage</Text>
        </Box>
        <Text as="p" color="#4e73df" fontWeight="semibold" d="flex" alignItems="baseline">
          <a href="https://undraw.co/">Ilustraciones →</a>
        </Text>
      </Box>
    </Box>
  )
}

export default ImgCard
