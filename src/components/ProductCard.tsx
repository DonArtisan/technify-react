import {Button, Flex, Image, Stack, Text} from '@chakra-ui/react'
import {useCartActions} from 'stores/useCartStore'
import type {Product} from '../../generated/graphql'

interface ProductCardProps {
  product: Pick<Product, 'id' | 'name' | 'currentPrice' | 'description'> & {
    image: {readonly originalSrc: string} | null
  }
}
export default function ProductCard({product}: ProductCardProps) {
  const {addToCart} = useCartActions()

  function handleClick() {
    addToCart({...product, quantity: 1})
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
      <Image
        src={product.image?.originalSrc}
        objectFit="cover"
        height="228px"
        width="full"
      />
      <Text height="fit-content" fontWeight="semibold">
        {product.name}
      </Text>
      <Text noOfLines={2} height="fit-content" overflow="hidden">
        {product.description}
      </Text>
      <Flex alignItems="center" gap="8px">
        <Text fontSize="20px" fontWeight="medium" color="blue.900">
          $ {product.currentPrice}
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
