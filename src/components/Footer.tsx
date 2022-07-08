import { VFC } from 'react'

import { Box, Text } from '@chakra-ui/react'

const Footer: VFC = () => {
  return (
    <Box as="footer" display="flex" justifyContent="center" mt="100">
      <Text>&copy; aki spacecrea</Text>
    </Box>
  )
}

export default Footer
