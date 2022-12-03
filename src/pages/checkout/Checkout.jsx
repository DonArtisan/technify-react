import {Flex, Heading} from '@chakra-ui/react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import {graphql} from 'babel-plugin-relay/macro'
import {useContext, useEffect, useState} from 'react'
import {useMutation} from 'react-relay'
import CheckoutForm from '../../components/CheckoutForm'
import {ShoppingCartContext} from '../../context/ShoppingCartContext'

export default function Checkout() {
  const [stripePromise, setStripePromise] = useState(null)
  const [clientSecret, setClientSecreto] = useState('')
  const shopingCartCtx = useContext(ShoppingCartContext)

  const {items, add, remove, subtotal, direction} = shopingCartCtx
  console.log(items)

  const [commit] = useMutation(
    graphql`
      mutation CheckoutMutation($input: ClientSecretInput!) {
        clientSecret(input: $input) {
          clientSecret
          userErrors {
            field
            message
          }
        }
      }
    `
  )

  useEffect(() => {
    let isMounted = true
    console.log('i fire once')

    if (!isMounted) {
      return
    }

    commit({
      variables: {
        input: {
          amount: subtotal,
          products: items,
          deliveryPlace: direction,
        },
      },
      onCompleted({clientSecret}) {
        const clientSecreto = clientSecret.clientSecret
        const stripeApiKey = process.env.REACT_APP_STRIPE

        setStripePromise(loadStripe(stripeApiKey))
        setClientSecreto(clientSecreto)

        // if (userErrors && userErrors.length > 0) {
        //   const {errors} = formatGraphQLErrors(userErrors)
        //   formikBag.setErrors(errors)
        // }
        // if (userErrors.length === 0) {
        //   login(userLogin)
        //   navigate('/')
        // }
      },
      onError({clientSecret}) {
        console.log(clientSecret)
      },
    })

    return () => {
      isMounted = false
    }

    // fetch('/config').then(async (r) => {
    //   const {publishableKey} = await r.json()

    //   console.log(publishableKey)
    // })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Flex
      maxWidth="100%"
      padding="50px"
      justifyContent="center"
      direction="column"
    >
      <Heading>Payment</Heading>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{clientSecret}}>
          <CheckoutForm />
        </Elements>
      )}
    </Flex>
  )
}
