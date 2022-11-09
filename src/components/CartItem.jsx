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
import {useState} from 'react'
import {useContext} from 'react'
import {ShoppingCartContext} from '../context/ShoppingCartContext'

export default function CartItem({data}) {
  const [subTotal, setSubTotal] = useState(data.currentPrice)
  const shopingCartCtx = useContext(ShoppingCartContext)
  const {items, add} = shopingCartCtx

  function onChange(amout) {
    setSubTotal((amout * data.currentPrice).toFixed(2))

    /**
     * pending to fix
     * update quantity from number input
     */
  }

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
            {data.description}
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
          defaultValue={data.qty}
          onChange={onChange}
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
          onClick={() => add([...items.filter((item) => item.id !== data.id)])}
          borderRadius="full"
        >
          <CloseIcon width="12px" height="12px" />
        </Flex>
      </Td>
    </Tr>
  )
}
