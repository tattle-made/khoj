import React, { useState, useEffect } from "react"
import { Box, Heading } from "grommet"
import axios from "axios"
import QueryPreview from "../QueryPreview"

const Queries = () => {
  const [page, setPageNum] = useState(0)
  const [queries, setQueries] = useState([])

  useEffect(() => {
    axios
      .get(`${process.env.KHOJ_API_URL}/queries`)
      .then(response => response.data)
      .then(queries => {
        setQueries(queries)
      })
      .catch(err => console.log("error"))
  }, [])

  return (
    <Box direction={"column"}>
      {queries && queries.map(query => <QueryPreview query={query} />)}
    </Box>
  )
}

export default Queries
