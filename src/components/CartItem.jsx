import {CloseIcon} from '@chakra-ui/icons'
import {
  Flex,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react'
import {useEffect, useState} from 'react'
import {useCartActions} from '../stores/useCartStore'

export default function CartItem({data}) {
  const [subTotal, setSubTotal] = useState(data.currentPrice)
  const [quantity, setQuantity] = useState(data.quantity)
  const {removeFromCart, updateCart} = useCartActions()

  function onChange(amount) {
    updateCart({...data, quantity: Number(amount)})
  }
  function deleteItem() {
    removeFromCart(data)
  }

  useEffect(() => {
    setSubTotal(data.currentPrice * data.quantity)
    setQuantity(data.quantity)
  }, [data])

  return (
    <Tr paddingBlock="20px">
      <Td>
        <Flex gap="30px" alignItems="center">
          <Image
            height="140px"
            width="140px"
            objectFit="cover"
            src={data.image}
          />
          <Text
            maxWidth="400px"
            noOfLines={4}
            height="fit-content"
            overflow="hidden"
          >
            {data.name}
          </Text>
        </Flex>
      </Td>
      <Td fontWeight="bold" fontSize="22px" maxWidth="145px" flexWrap="wrap">
        C${data.currentPrice}
      </Td>
      <Td>
        <NumberInput
          size="md"
          maxWidth={20}
          max={10}
          min={1}
          defaultValue={quantity}
          onChange={onChange}
          value={quantity}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Td>
      <Td fontWeight="bold" fontSize="22px" maxWidth="145px" flexWrap="wrap">
        ${subTotal}
      </Td>
      <Td>
        <Flex
          color="gray.400"
          border="1px solid"
          borderColor="gray.400"
          padding="8px"
          cursor="pointer"
          onClick={deleteItem}
          borderRadius="full"
        >
          <CloseIcon width="12px" height="12px" />
        </Flex>
      </Td>
    </Tr>
  )
}
