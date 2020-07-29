import React, { useState, useContext } from "react"
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
import TattleTheme from "../atomic/theme"
import axios from "axios"
import MetadataEditor from "../MetadataEditor"
import Query from "../Query"
import ResponseEditor from "../ResponseEditor"

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

const Queries = () => {
  const size = useContext(ResponsiveContext)
  const sizeMapping = size === "small" ? "small" : "other"
  return (
    <Grid
      fill
      areas={areasBySize[sizeMapping]}
      columns={columnsBySize[sizeMapping]}
      rows={rowsBySize[sizeMapping]}
      gap={"medium"}
    >
      <Box gridArea={"main"} direction={"column"}>
        <Box>
          <Heading level={2}> Query </Heading>
          <Query id={""} />
        </Box>
        <Box>
          <Heading level={2}> Response </Heading>
          <ResponseEditor />
        </Box>
      </Box>
      <Box gridArea={"side_bar"} background={"light-1"} pad={"small"}>
        <Box>
          <Heading level={4}> Related Media </Heading>
        </Box>
        <Box>
          <Heading level={4}> Metadata </Heading>
          <MetadataEditor queryId={"asdfas-asdfasdf-asdfasdf"} />
        </Box>
      </Box>
    </Grid>
  )
}

export default Queries
