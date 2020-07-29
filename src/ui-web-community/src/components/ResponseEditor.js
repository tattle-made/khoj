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

const ResponseEditor = () => {
  const [responseType, setResponseType] = useState("")
  const [textResponseData, setTextResponseData] = useState({})
  const onClickSend = async () => {
    console.log({ responseType, textResponseData })
    const token = sessionStorage.getItem("jwt")
    const data = {}
    const update_res = await axios({
      method: "PUT",
      url: KHOJ_API_URL + "/queries/5f2014b62a50cc43b3e60ae2",
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    console.log("Upload Result", update_res)
  }

  return (
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
      <Button label={"Send"} onClick={onClickSend} />
    </Box>
  )
}

export default ResponseEditor
