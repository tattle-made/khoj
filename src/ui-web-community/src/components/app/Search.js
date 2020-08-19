import React, { useState, useEffect } from "react"
import { Box } from "grommet"
/**
 * @author
 * @function Search
 **/

const Search = () => {
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    setFetching(true)
  })

  return (
    <Box pad="medium">
      <h1>Search</h1>
    </Box>
  )
}

export default Search
