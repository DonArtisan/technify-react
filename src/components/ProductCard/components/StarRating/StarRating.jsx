import {StarIcon} from '@chakra-ui/icons'
import {Box, Flex} from '@chakra-ui/react'
import {useEffect, useState} from 'react'

export default function StarRating() {
  const [activeStar, setActiveStar] = useState(-1)

  useEffect(() => {
    setActiveStar(2)
  }, [])

  return (
    <Flex position="relative" direction="row" align="initial">
      {[...new Array(5)].map((arr, index) => {
        const showEmptyIcon = activeStar === -1 || activeStar < index + 1

        return (
          <Box position="relative" key={index}>
            <Box
              position="absolute"
              overflow="hidden"
              sx={{
                width: `${(activeStar % 1) * 100}%`,
              }}
            />
            <Box>
              {showEmptyIcon ? (
                <StarIcon marginInlineEnd="3px" color="gray" />
              ) : (
                <StarIcon marginInlineEnd="3px" color="#E9A426" />
              )}
            </Box>
          </Box>
        )
      })}
    </Flex>
  )
}
