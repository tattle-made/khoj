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

const SingleResponseEditor = ({ response }) => {
  const [responseType, setResponseType] = useState(
    response ? response.type : "text"
  )
  const [activeResponse, setActiveResponse] = useState({})
  const [textResponseData, setTextResponseData] = useState({})

  const onClickSave = () => {}

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
      <Button label={"Save"} onClick={onClickSave} />
      <Box height={"0.1em"} background={"light-3"} />
    </Box>
  )
}

const KHOJ_API_URL = process.env.KHOJ_API_URL || "http://localhost:1337"
/**
 * @author
 * @function ResponseEditor
 **/

const ResponseEditor = ({ queryId }) => {
  const [responseType, setResponseType] = useState("text")
  const [textResponseData, setTextResponseData] = useState({})
  const [responses, setResponses] = useState([])

  useEffect(() => {
    setResponses([
      {
        type: "text",
        text: {
          heading: "asdfasdf",
          byline: "asdfasdfasdfadsfadsf",
        },
      },
      {
        type: "image",
        image: {
          caption: "asdfasdf asdf asdf asdf adfs",
          url:
            "https://tattle-services-search.s3.ap-south-1.amazonaws.com/photo_1580818135730_ebd11086660b_ixlib_rb_1_2_696d3cf0d2.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26auto%3Dformat%26fit%3Dcrop%26w%3D1339%26q%3D80",
        },
      },
      {
        type: "url",
        url: {
          thumbnail:
            "https://tattle-services-search.s3.ap-south-1.amazonaws.com/thumbnail_photo_1592405750877_c285afc729ce_ixlib_rb_1_2_6de8197538.1%26ixid%3DeyJhcHBfaWQiOjEyMDd9%26auto%3Dformat%26fit%3Dcrop%26w%3D1262%26q%3D80",
          headline: "asdfasdfasdfasdfasdfas fas ad fasd fasd f",
          byline: "asdf asdf asdf aksdjf lasjd flkaj sldkf slkjasdf",
          url: "asdf asdf asdf asdf ads fasdf",
        },
      },
    ])
  }, [])

  const onClickPublish = async () => {
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
      <Box direction={"row"}>
        <Box flex={"grow"}>
          <Heading level={2} margin={{ top: "none", bottom: "small" }}>
            Response
          </Heading>
        </Box>
        <Button default label={"Publish"} onClick={onClickPublish} />
      </Box>

      {responses && (
        <Box direction={"column"} gap={"medium"}>
          {responses.map(response => (
            <SingleResponseEditor response={response} />
          ))}
          <SingleResponseEditor />
        </Box>
      )}
    </Box>
  )
}

export default ResponseEditor
