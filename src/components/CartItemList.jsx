import {
  Button,
  ButtonGroup,
  Stack,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import CartItem from './CartItem'

const tabs = ['producto', 'precio', 'cantidad', 'subtotal']

export default function CartItemList({items}) {
  return (
    <Stack width="full" gap="30px">
      <Table height="530px" display="block" overflowY="scroll">
        <Thead position="sticky" top={0} backgroundColor="white" zIndex="4">
          <Tr>
            {tabs.map((tab, key) => (
              <Th
                fontSize="22px"
                fontWeight="bold"
                color="BlackAlpha.900"
                textTransform="capitalize"
                listStyleType="none"
                key={key}
              >
                {tab}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody
          marginBlock="20px !important"
          width="full"
          borderBlock="1px solid"
          borderColor="gray.400"
        >
          {items.map((item, key) => (
            <CartItem key={key} data={item} />
          ))}
        </Tbody>
      </Table>
      <ButtonGroup variant="outline">
        <Button width="auto">continuar comprando</Button>
        <Button width="auto">limpiar</Button>
      </ButtonGroup>
    </Stack>
  )
}
