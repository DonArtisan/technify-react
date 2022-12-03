import {Select} from '@chakra-ui/react'
import {useDisclosure} from '@chakra-ui/react'
import {Flex} from '@chakra-ui/react'
import {Modal} from '@chakra-ui/react'
import {ModalContent} from '@chakra-ui/react'
import {ModalBody} from '@chakra-ui/react'
import {Input} from '@chakra-ui/react'
import {FormLabel} from '@chakra-ui/react'
import {ModalFooter} from '@chakra-ui/react'
import {FormControl} from '@chakra-ui/react'
import {ModalHeader} from '@chakra-ui/react'
import {ModalOverlay} from '@chakra-ui/react'
import {Button, Heading, Stack, Text} from '@chakra-ui/react'
import {Form} from 'formik'
import {FastField} from 'formik'
import {Formik} from 'formik'
import {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../context/AuthContext'
import {ShoppingCartContext} from '../context/ShoppingCartContext'

export default function Payment() {
  const shopingCartCtx = useContext(ShoppingCartContext)
  const {addDirection} = shopingCartCtx
  const auth = useAuth()
  const {isOpen, onOpen, onClose} = useDisclosure()
  const [selectValue, setSelectValue] = useState('')

  const {subtotal} = shopingCartCtx
  console.log(subtotal)
  const data = [
    {
      tab: 'subtotal',
      value: subtotal,
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
