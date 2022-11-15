import {CardElement} from '@stripe/react-stripe-js'

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#303238',
      fontSize: '16px',
      fontFamily: 'sans-serif',
      fontSmoothing: 'antialiased',
      '::placeholder': {
        color: '#CFD7DF',
      },
    },
    invalid: {
      color: '#e5424d',
      ':focus': {
        color: '#303238',
      },
    },
  },
}

export default function CardSection() {
  return (
    <label>
      Card Details
      <CardElement options={CARD_ELEMENT_OPTIONS} />
    </label>
  )
}
