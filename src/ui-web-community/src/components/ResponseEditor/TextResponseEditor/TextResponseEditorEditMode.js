import React, { useState, useEffect } from "react"

/**
 * @author
 * @function TextResponseEditorEditMode
 **/

const TextResponseEditorEditMode = ({ response, index }) => {
  const [responseType, setResponseType] = useState(
    response ? response.type : "text"
  )
  const [textResponseData, setTextResponseData] = useState(
    response.text ? response.text : {}
  )

  return (
    <>
      {responseType === "text" && (
        <Box direction={"column"} gap={"small"}>
          <TextInput
            placeholder="Heading"
            value={textResponseData.heading}
            onChange={event =>
              setTextResponseData({
                ...textResponseData,
                ["heading"]: event.target.value,
              })
            }
          />
          <TextArea
            placeholder="Byline"
            value={textResponseData.byline}
            onChange={event =>
              setTextResponseData({
                ...textResponseData,
                ["byline"]: event.target.value,
              })
            }
          />
        </Box>
      )}
    </>
  )
}

export default TextResponseEditorEditMode
