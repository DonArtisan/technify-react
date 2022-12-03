import {
  Button,
  ButtonGroup,
  Heading,
  Stack,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import CartItem from './CartItem'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import {ShoppingCartContext} from '../context/ShoppingCartContext'

const tabs = ['producto', 'precio', 'cantidad', 'subtotal', '']

export default function CartItemList() {
  const shopingCartCtx = useContext(ShoppingCartContext)
  const {items, add, removeAllItems} = shopingCartCtx
  let hash = {}

  const data = items
    .sort((a, b) => (a.id === b.id ? b.qty - a.qty : a - b))
    .filter((item) => (hash[item.id] ? false : (hash[item.id] = true)))

  return (
    <Stack width="full" gap="30px">
      {data.length > 0 ? (
        <Table height="406px" display="block" overflowY="scroll">
          <Thead position="sticky" top={0} backgroundColor="white" zIndex="4">
            <Tr>
              {tabs.map((tab, key) => (
                <Th
                  fontSize="22px"
                  fontWeight="bold"
                  textColor="gray.900"
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
            {data.map((item, key) => (
              <CartItem key={key} data={item} />
            ))}
          </Tbody>
        </Table>
      ) : (
        <Heading paddingInline={6} fontSize="24px">
          Aun no has agregado productos
        </Heading>
      )}
      <ButtonGroup
        variant="outline"
        paddingInlineStart={data.length === 0 && 6}
      >
        <Link to="/products">
          <Button width="auto">continuar comprando</Button>
        </Link>
        <Button width="auto" onClick={() => removeAllItems()}>
          limpiar
        </Button>
      </ButtonGroup>
    </Stack>
  )
}
