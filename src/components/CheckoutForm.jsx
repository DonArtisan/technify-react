import {VStack} from '@chakra-ui/react'
import {Stack} from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'
import {Button} from '@chakra-ui/react'
import {useElements} from '@stripe/react-stripe-js'
import {PaymentElement} from '@stripe/react-stripe-js'
import {useStripe} from '@stripe/react-stripe-js'
import {useState} from 'react'

export default function CheckoutForm() {
  const [message, setMessage] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    console.log('testing')
    e.preventDefault()
    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)

    const {error} = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'https://example.com/order/123/complete',
      },
    })

    if (error) {
      setMessage(error.message)
    }

    setIsProcessing(false)
  }
  return (
    <Stack
      gap="10px"
      as="form"
      id="payment-form"
      onSubmit={handleSubmit}
      //   width="full"
      //   maxWidth="100%"
    >
      <PaymentElement />
      <Button disabled={isProcessing} type="submit">
        <span id="button-text">
          {isProcessing ? 'Processing...' : 'Pay Now'}
        </span>
      </Button>
    </Stack>
  )
}
