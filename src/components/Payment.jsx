import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import {FastField, Form, Formik} from 'formik'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import {useCart, useCartActions} from '../stores/useCartStore'

export default function Payment() {
  const {addDirection} = useCartActions()
  const auth = useAuth()
  const cart = useCart()
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [selectValue, setSelectValue] = useState('')

  let subTotal = 0

  cart.forEach((itm) => {
    subTotal += itm.quantity * itm.currentPrice
  })

  let impuesto = subTotal * 0.15

  const data = [
    {
      tab: 'subtotal',
      value: subTotal,
    },
    {
      tab: 'impuesto',
      value: impuesto.toFixed(2),
    },
    {
      tab: 'total',
      value: subTotal + subTotal * 0.15,
    },
  ]
  function handleSelect(e) {
    console.log(e.target.value)
    setSelectValue(e.target.value)
    if (e.target.value === 'delivery') {
      onOpen()
    }
  }

  function handleSubmit(values) {
    console.log(values)
    addDirection(values.mainDirection)
    onClose()
  }

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
      <Text>Seleccione delivery o pickup</Text>
      <Select
        value={selectValue}
        placeholder="Seleccione una opcion"
        onChange={handleSelect}
      >
        <option value="pickup">Pickup</option>
        <option value="delivery">Delivery</option>
      </Select>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Direccion de Envio</ModalHeader>
          <Formik
            onSubmit={handleSubmit}
            initialValues={{mainDirection: '', departamento: '', municipio: ''}}
          >
            <Form>
              <ModalBody>
                <Stack>
                  <FastField name="mainDirection">
                    {({field, meta: {error, touched}}) => (
                      <FormControl>
                        <FormLabel>Direccion Principal</FormLabel>
                        <Input {...field} type="text" />
                      </FormControl>
                    )}
                  </FastField>
                  <FastField name="departamento">
                    {({field, meta: {error, touched}}) => (
                      <FormControl>
                        <FormLabel>Departamento</FormLabel>
                        <Input {...field} type="text" />
                      </FormControl>
                    )}
                  </FastField>
                  <FastField name="municipio">
                    {({field, meta: {error, touched}}) => (
                      <FormControl>
                        <FormLabel>Municipio</FormLabel>
                        <Input {...field} type="text" />
                      </FormControl>
                    )}
                  </FastField>
                </Stack>
              </ModalBody>
              <ModalFooter>
                <Button
                  type="submit"
                  size="md"
                  variant="outline"
                  marginRight="2"
                >
                  Save
                </Button>
                <Button onClick={onClose} bgColor="red.500">
                  Cancel
                </Button>
              </ModalFooter>
            </Form>
          </Formik>
        </ModalContent>
      </Modal>
      <Button
        as={Link}
        to={auth.user ? '/checkout' : '/login'}
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
