import {Flex} from '@chakra-ui/react'
import {Button, Heading, Stack, Text} from '@chakra-ui/react'

export default function Payment() {
  const data = [
    {
      tab: 'subtotal',
      value: '1300.00',
    },
    {
      tab: 'impuesto',
      value: '13.00',
    },
    {
      tab: 'total',
      value: '1300.00',
    },
  ]

  return (
    <Stack
      padding="30px"
      height="fit-content"
      width="446px"
      borderRadius="8px"
      backgroundColor="#F5F7FF"
      gap="20px"
    >
      <Heading as="h2" fontSize="24px">
        Resumen
      </Heading>
      <Text as="h4" fontSize="18px">
        Envío e impuesto estimado
      </Text>
      {data.map((element) => (
        <Flex justifyContent="space-between" textTransform="capitalize">
          <Text fontWeight="bold">{element.tab}</Text>
          <Text>${element.value}</Text>
        </Flex>
      ))}
      <Button alig width="full" backgroundColor="blue.900">
        Proceder a pagar
      </Button>
    </Stack>
  )
}
