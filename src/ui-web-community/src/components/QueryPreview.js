import React, { useState, useEffect } from "react"
import { Box, Heading, Text, Button } from "grommet"
import { SinglePost } from "@bit/tattle-tech.core-ui.mediablock"
import { Link } from "gatsby"

/**
 * @author
 * @function QueryPreview
 **/

const QueryPreview = ({ query }) => {
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
              <Box margin={{ right: "xsmall" }} width={"8em"} height={"8em"}>
                <SinglePost
                  type={mediaItem.mime.startsWith("image/") ? "image" : "video"}
                  src={mediaItem.formats.thumbnail.url}
                />
              </Box>
            )
          })}
      </Box>
      <Box direction={"row"} margin={{ top: "small" }}>
        <Text size={"medium"}> Question </Text>
        <Box width={"1em"} />
        <Text dangerouslySetInnerHTML={{ __html: query.question }} />
      </Box>
      <Box direction={"row"} margin={{ top: "medium" }}>
        <Text size={"medium"}> Feedback </Text>
        <Box width={"1em"} />
        <Text> {query.user_feedback}</Text>
      </Box>
      <Box direction={"row"} margin={{ top: "small" }}>
        <Link to={`/app/query/${query._id}`}>
          <Button default label={"Details"}></Button>
        </Link>
      </Box>
    </Box>
  )
}

export default QueryPreview
