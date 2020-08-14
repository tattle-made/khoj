import React, { useState, useEffect } from "react"
import { Box, Heading, Text, Button } from "grommet"
import { SinglePost } from "@bit/tattle-tech.core-ui.mediablock"
import { Link } from "gatsby"

/**
 * @author
 * @function QueryPreview
 **/

const Query = ({ query }) => {
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    setFetching(true)
  })

  return (
    <Box
      direction={"column"}
      background={"light-1"}
      pad={"small"}
      round={"small"}
      margin={{ bottom: "small" }}
    >
      <Box direction={"row"} wrap>
        {query.media &&
          query.media.map(mediaItem => {
            return (
              <Box
                key={mediaItem.id}
                margin={{ right: "xsmall" }}
                width={"8em"}
                height={"8em"}
              >
                <SinglePost
                  type={mediaItem.mime.startsWith("image/") ? "image" : "video"}
                  src={mediaItem.formats.small.url}
                />
              </Box>
            )
          })}
      </Box>
      <Box direction={"row"} margin={{ top: "small" }}>
        <Text> {query.question}</Text>
      </Box>
    </Box>
  )
}

export default Query
