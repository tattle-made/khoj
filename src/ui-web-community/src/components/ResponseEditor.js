import React, { useState, useEffect } from "react"
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
import TattleTheme from "./atomic/theme"

const KHOJ_API_URL = process.env.KHOJ_API_URL || "http://localhost:1337"
/**
 * @author
 * @function ResponseEditor
 **/

const ResponseEditor = ({ queryId }) => {
  const [responseType, setResponseType] = useState("")
  const [textResponseData, setTextResponseData] = useState({})

  const onClickSend = async () => {
    console.log({ responseType, textResponseData })
    const token = sessionStorage.getItem("jwt")
    const data = {}
    const update_res = await axios({
      method: "PUT",
      url: `${process.env.KHOJ_API_URL}/queries/${queryId}`,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log("Upload Result", update_res)
  }

  return (
    <Box
      direction={"column"}
      background={"light-1"}
      pad={"small"}
      round={"small"}
    >
      <Heading level={2} margin={{ top: "none", bottom: "small" }}>
        Response
      </Heading>
      <Box gap={"large"}>
        <Box direction={"row"} gap={"large"} align={"center"}>
          <Text size={"medium"}> Type </Text>
          <Select
            name={"Theme"}
            options={["text", "image", "url"]}
            value={responseType}
            onChange={option => setResponseType(option.value)}
          />
        </Box>
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
        <Button label={"Send Reply"} onClick={onClickSend} />
      </Box>
    </Box>
  )
}

export default ResponseEditor
