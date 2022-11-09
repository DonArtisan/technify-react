import {Stack, Flex, Image, Text, Button} from '@chakra-ui/react'
import {useContext} from 'react'
import {ShoppingCartContext} from '../context/ShoppingCartContext'

export default function ProductCard({product}) {
  const shopingCartCtx = useContext(ShoppingCartContext)
  const {items, add} = shopingCartCtx

  function handleClick() {
    let qty = 1
    items.map((item) => item.id === product.id && qty++)

    add([...items, {...product, qty}])
  }

  return (
    <Stack
      width="234px"
      alignItems="center"
      textAlign="center"
      padding="24px"
      gap="4px"
    >
      <Image height="140px" width="140px" />
      <Text noOfLines={2} height="fit-content" overflow="hidden">
        {product.description}
      </Text>
      <Flex alignItems="center" gap="8px">
        {/* <Text color="gray.500" textDecoration="line-through">
          $499.00
        </Text> */}
        <Text fontSize="20px" fontWeight="semibold">
          C$ {product.currentPrice}
        </Text>
      </Flex>
      <Button variant="outline" onClick={handleClick}>
        añadir
      </Button>
    </Stack>
  )
}
