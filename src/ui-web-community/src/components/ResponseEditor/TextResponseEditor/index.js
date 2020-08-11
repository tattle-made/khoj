import React, { useState, useEffect } from "react"
import { Box } from "grommet"
import { Edit2, Trash2, Save } from "react-feather"
/**
 * @author
 * @function TextResponseEditor
 **/

const TextResponseEditor = ({ savedResponse, onDelete, onChange }) => {
  const [activeResponse, setActiveResponse] = useState(savedResponse)

  return (
    <Box direction={"row"} align={"center"} wrap={"true"}>
      <Heading level={3}>{index + 1}</Heading>
      <Text size={"medium"}> Type </Text>
      <Select
        name={"Theme"}
        options={["text", "image", "url"]}
        value={responseType}
        onChange={option => setResponseType(option.value)}
      />
    </Box>
  )
}

export default TextResponseEditor
