import {Flex, Heading, Stack} from '@chakra-ui/react'
import CartItemList from '../../components/CartItemList'
import Payment from '../../components/Payment'

export default function shoppingCart() {
  return (
    <Stack paddingBlock="40px" gap="30px">
      <Heading textTransform="capitalize" paddingInlineStart="24px">
        carrito de compra
      </Heading>
      <Flex gap="40px" justifyContent="space-between">
        <CartItemList />
        <Payment />
      </Flex>
    </Stack>
  )
}
