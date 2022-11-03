const Button = {
  variants: {
    solid: (props) => ({
      paddingBlock: '18px',
      borderRadius: '3xl',
      width: '170px',
      height: '50px',
      color: 'white',
      borderWidth: '2px',
      transition: 'all 0.5s ease',
      fontFamily: 'body',
    }),
    outline: (props) => ({
      width: '160px',
      padding: '8px 26px',
      textTransform: 'capitalize',
      color: 'blue.900',
      borderRadius: 'full',
      border: '2px solid',
      borderColor: 'blue.900',
      transition: 'all .4s ease',
      _hover: {
        color: 'white',
        backgroundColor: 'blue.900',
      },
      _active: {
        color: 'white',
        backgroundColor: 'blue.900',
      },
      _focus: {
        color: 'white',
        backgroundColor: 'blue.900',
      },
    }),
  },
}

export default Button
