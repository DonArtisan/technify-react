import {Flex, Heading} from '@chakra-ui/react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe, Stripe} from '@stripe/stripe-js'
import {useEffect, useState} from 'react'
import {graphql, useMutation} from 'react-relay'
import CheckoutForm from '../../components/CheckoutForm'
import {useCart, useDirection} from '../../stores/useCartStore'
import {CheckoutMutation} from './__generated__/CheckoutMutation.graphql'

export default function Checkout() {
  const [stripePromise, setStripePromise] =
    useState<Promise<Stripe | null> | null>(null)
  const [clientSecret, setClientSecreto] = useState<string | null | undefined>(
    ''
  )

  const cart = useCart()
  const direction = useDirection()

  let subTotal = 0

  cart.forEach((itm) => {
    subTotal +=
      itm.quantity * (itm.currentPrice ? itm.currentPrice * itm.quantity : 0)
  })

  const [commit] = useMutation<CheckoutMutation>(
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
          amount: subTotal,
          products: cart,
          deliveryPlace: direction,
        },
      },
      onCompleted({clientSecret}) {
        const clientSecreto = clientSecret?.clientSecret
        const stripeApiKey = import.meta.env.VITE_APP_STRIPE

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
      onError(error) {
        console.log(error)
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
