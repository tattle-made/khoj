import React, { useState, useEffect } from "react"
import { Box, Heading, Text } from "grommet"
/**
 * @author
 * @function Workspace
 **/

const Workspace = () => {
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    setFetching(true)
  })

  return (
    <Box>
      <Heading>Workspace</Heading>
    </Box>
  )
}

export default Workspace
