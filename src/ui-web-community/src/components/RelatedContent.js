import React, { useState, useEffect } from "react"
import { Box, Heading, Text } from "grommet"
import axios from "axios"
/**
 * @author
 * @function RelatedContent
 **/

const RelatedContent = ({ query }) => {
  const [fetching, setFetching] = useState(false)
  const [matches, setMatches] = useState([])

  useEffect(() => {
    console.log("query is ready")
    if (query.media) {
      console.log("there iis media", query.media[0].url)
      var data = JSON.stringify({
        url: query.media[0].url,
      })
      var config = {
        method: "post",
        url: `https://kosh-server.tattle.co.in/api/search/duplicate-stories`,
        headers: {
          token: "af4bf610-f283-11ea-a432-6bbf829acc85",
          "Content-Type": "application/json",
        },
        data: data,
      }
      axios(config)
        .then(response => {
          console.log(response)
          setMatches(response.data.urls)
        })
        .catch(err => console.log(err))
    }
  }, query)

  return (
    <Box
      direction={"column"}
      background={"light-1"}
      pad={"small"}
      round={"small"}
    >
      <Heading level={4} margin={{ top: "none", bottom: "small" }}>
        {" "}
        Related Media{" "}
      </Heading>
      <Box gap={"small"}>
        {matches &&
          matches.map(match => {
            return (
              <Box direction={"column"}>
                <a href={match.url}> {match.title}</a>
              </Box>
            )
          })}
      </Box>
    </Box>
  )
}

export default RelatedContent
