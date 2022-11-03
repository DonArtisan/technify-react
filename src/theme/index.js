import {extendTheme} from '@chakra-ui/react'
import Button from './components/Button'
import colors from './foundations/colors'
import semanticTokens from './foundations/semanticTokens'

const overrides = {
  semanticTokens,
  colors,
  components: {
    Button,
  },
}

export default extendTheme(overrides)
