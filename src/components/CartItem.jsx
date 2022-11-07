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

export default function CartItem({data}) {
  const [subTotal, setSubTotal] = useState(data.price)

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
        ${data.price}
      </Td>
      <Td>
        <NumberInput
          size="md"
          max={10}
          min={1}
          defaultValue={1}
          onChange={(amout) => setSubTotal((amout * data.price).toFixed(2))}
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
    </Tr>
  )
}
