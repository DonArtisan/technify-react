import {Box, Flex, Image, Text} from '@chakra-ui/react'
import StarRating from './components/StarRating/StarRating'

export default function ProductCard() {
  return (
    <Box
      direction="column"
      width="234px"
      //   border="solid"
      //   borderColor="red"
      align="center"
    >
      <Image height="140px" width="140px" />
      <Flex
        direction="row"
        align="center"
        paddingInline="24px"
        paddingBlockStart="10px"
        paddingBlockEnd="10px"
      >
        <StarRating />
        <Text
          lineHeight="25.2px"
          marginInlineStart="6px"
          align="center"
          color="gray.500"
        >
          Reviews (4)
        </Text>
      </Flex>
      <Text paddingInline="24px" marginBlockEnd="10px">
        EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
      </Text>
      <Text paddingInline="24px" color="gray.500" textDecoration="line-through">
        $499.00
      </Text>
      <Text fontSize="20px" fontWeight="semibold" paddingInline="24px">
        $499.00
      </Text>
    </Box>
  )
}