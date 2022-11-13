import {Button, Flex, Image, Stack, Text} from '@chakra-ui/react'
import {useContext} from 'react'
import {ShoppingCartContext} from '../context/ShoppingCartContext'
import defalutImg from '../utils/assets/image/default-vs.jpg'

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
      minWidth="280px"
      maxWidth="280px"
      alignItems="center"
      textAlign="center"
      boxShadow="inset 0px 0px 0px 1px rgb(221 221 221)"
      transition="border-color 0.3s ease"
      height="464px"
      paddingInline="56px"
      borderRadius="12px"
      padding="24px"
      border="2px solid"
      borderColor="transparent"
      _hover={{
        borderColor: '#3452ff',
        boxShadow: '0px 0px 20px 1px rgb(0 0 0 / 10%)',
      }}
      gap="4px"
    >
      <Image src={defalutImg} objectFit="cover" height="228px" width="full" />
      <Text noOfLines={2} height="fit-content" overflow="hidden">
        {product.description}
      </Text>
      <Flex alignItems="center" gap="8px">
        <Text fontSize="20px" fontWeight="medium" color="blue.900">
          $499.00
        </Text>
        <Text color="gray.500" textDecoration="line-through">
          $499.00
        </Text>
      </Flex>
      <Button
        padding="8px 16px"
        width="auto"
        height="auto"
        variant="outline"
        onClick={handleClick}
      >
        añadir
      </Button>
    </Stack>
  )
}
