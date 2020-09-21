import React, { useState, useContext, useEffect } from "react"
import {
  Box,
  Grommet,
  Grid,
  Button,
  Select,
  Heading,
  Text,
  TextInput,
  TextArea,
  ResponsiveContext,
} from "grommet"
import axios from "axios"
import MetadataEditor from "./MetadataEditor"
import ResponseEditor from "./ResponseEditor"
import Query from "./Query"
import NotificationComposer from "./NotificationComposer"
import RelatedContent from "./RelatedContent"

const columnsBySize = {
  small: ["auto"],
  other: ["flex", "medium"],
}

const rowsBySize = {
  small: ["auto", "auto"],
  other: ["flex"],
}

const areasBySize = {
  small: [
    { name: "main", start: [0, 0], end: [0, 0] },
    { name: "side_bar", start: [0, 1], end: [0, 1] },
  ],
  other: [
    { name: "main", start: [0, 0], end: [0, 0] },
    { name: "side_bar", start: [1, 0], end: [1, 0] },
  ],
}

/**
 * @author
 * @function QueryDetail
 **/

const QueryDetail = ({ queryId }) => {
  const size = useContext(ResponsiveContext)
  const sizeMapping = size === "small" ? "small" : "other"
  const [query, setQuery] = useState([])

  useEffect(() => {
    axios
      .get(`${process.env.KHOJ_API_URL}/queries/${queryId}`)
      .then(response => response.data)
      .then(queryResponse => {
        setQuery(queryResponse)
        console.log("----", queryResponse)
      })
      .catch(err => console.log("error"))
  }, [])

  return (
    <Box fill>
      <Box
        direction={"row"}
        background={"light-1"}
        pad={"small"}
        round={"small"}
        margin={{ bottom: "small" }}
      >
        <Box direction={"row"}>
          <Text size={"small"}> Feedback -&nbsp;</Text>
          <Text size={"small"} color={"neutral-3"}>
            {" "}
            {query.user_feedback}
          </Text>
        </Box>
      </Box>
      <Grid
        fill
        areas={areasBySize[sizeMapping]}
        columns={columnsBySize[sizeMapping]}
        rows={rowsBySize[sizeMapping]}
        gap={"medium"}
      >
        <Box gridArea={"main"} direction={"column"} gap={"small"}>
          <Box>
            <Query query={query} />
          </Box>
          <Box>
            <ResponseEditor
              queryId={queryId}
              communityResponses={query.responses}
            />
          </Box>
        </Box>
        <Box gridArea={"side_bar"} gap={"large"}>
          <Box>
            <RelatedContent query={query} />
          </Box>
          <Box>
            <MetadataEditor queryId={queryId} />
          </Box>
          <Box>
            <NotificationComposer
              queryId={queryId}
              userToken={query.author ? query.author.username : ""}
            />
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}

export default QueryDetail
