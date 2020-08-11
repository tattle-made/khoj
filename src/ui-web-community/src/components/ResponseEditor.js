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
  Image,
} from "grommet"
import axios from "axios"
import TattleTheme from "./atomic/theme"
import Dropzone from "react-dropzone"
import SingleResponseEditor from "./ResponseEditor/SingleResponseEditor"
import { PlusCircle } from "react-feather"

const KHOJ_API_URL = process.env.KHOJ_API_URL || "http://localhost:1337"
/**
 * @author
 * @function ResponseEditor
 **/

const ResponseEditor = ({ queryId }) => {
  const [responses, setResponses] = useState([])

  useEffect(() => {
    const apiResponse = [
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
          image: {
            formats: {
              thumbnail: {
                url:
                  "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQ",
              },
            },
          },
        },
      },
      {
        type: "url",
        url: {
          thumbnail: {
            formats: {
              thumbnail: {
                url:
                  "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQ",
              },
            },
          },
          headline: "asdfasdfasdfasdfasdfas fas ad fasd fasd f",
          byline: "asdf asdf asdf aksdjf lasjd flkaj sldkf slkjasdf",
          url: "asdf asdf asdf asdf ads fasdf",
        },
      },
    ]
    setResponses([...apiResponse])
  }, [])

  const onClickSave = async () => {
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
          <Heading
            level={2}
            margin={{ top: "none", bottom: "small" }}
          ></Heading>
        </Box>
        <Button default label={"Save"} onClick={onClickSave} />
      </Box>

      {responses && (
        <Box direction={"column"} gap={"medium"}>
          {responses.map((response, index) => (
            <SingleResponseEditor response={response} index={index} />
          ))}
        </Box>
      )}
      <Box align={"center"} pad={"small"}>
        <Button
          icon={<PlusCircle />}
          label={"Add Response"}
          gap={"small"}
          plain={"true"}
        />
      </Box>
    </Box>
  )
}

export default ResponseEditor
