import {Stack, Flex, Image, Text, Button} from '@chakra-ui/react'
import StarRating from './components/StarRating/StarRating'

export default function ProductCard() {
  return (
    <Stack width="234px" alignItems="center" padding="24px" gap="4px">
      <Image height="140px" width="140px" />
      <Flex direction="row" alignItems="center" paddingBlock="10px">
        <StarRating />
        <Text marginInlineStart="6px" alignItems="center" color="gray.500">
          Reviews (4)
        </Text>
      </Flex>
      <Text>
        EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...
      </Text>
      <Flex alignItems="center" gap="8px">
        <Text color="gray.500" textDecoration="line-through">
          $499.00
        </Text>
        <Text fontSize="20px" fontWeight="semibold">
          $499.00
        </Text>
      </Flex>
      <Button variant="outline">add to cart</Button>
    </Stack>
  )
}
