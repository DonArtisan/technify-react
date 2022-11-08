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
      <Text
        as="h4"
        fontSize="18px"
        maxWidth="360px"
        noOfLines={2}
        height="fit-content"
        overflow="hidden"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
        aspernatur corrupti debitis corporis sed dolores? Quasi porro
        necessitatibus vel, architecto nihil dolorem, mollitia eius ipsa
        laboriosam deleniti natus ratione velit!
      </Text>
      {data.map((element, key) => (
        <Flex
          justifyContent="space-between"
          textTransform="capitalize"
          key={key}
        >
          <Text fontWeight="bold">{element.tab}</Text>
          <Text>${element.value}</Text>
        </Flex>
      ))}
      <Button
        width="full"
        backgroundColor="blue.900"
        _hover={{backgroundColor: 'blue.600'}}
        _active={{backgroundColor: 'blue.600'}}
        _focus={{backgroundColor: 'blue.600'}}
      >
        Proceder a pagar
      </Button>
    </Stack>
  )
}
