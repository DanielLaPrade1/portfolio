import { extendTheme } from '@chakra-ui/react'
import '@fontsource/dm-serif-text';

const theme = extendTheme({
  fonts: {
    body: `'DM Serif Text', sans-serif`,
  },
})

export default theme