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
import SingleResponseEditor, {
  emptyTextResponse,
} from "./ResponseEditor/SingleResponseEditor"
import { PlusCircle } from "react-feather"

const KHOJ_API_URL = process.env.KHOJ_API_URL || "http://localhost:1337"
/**
 * @author
 * @function ResponseEditor
 **/

const ResponseEditor = ({ queryId, communityResponses }) => {
  const [newResponses, setNewResponses] = useState([emptyTextResponse])

  const onClickSave = async () => {
    const token = sessionStorage.getItem("jwt")
  }

  const onAddResponseClicked = () => {
    console.log("click ")
    setNewResponses([...newResponses, emptyTextResponse])
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

      {communityResponses && (
        <Box direction={"column"} gap={"medium"}>
          {communityResponses.map((response, index) => (
            <SingleResponseEditor
              key={index}
              response={response}
              index={index}
            />
          ))}
        </Box>
      )}

      {newResponses && (
        <Box direction={"column"} gap={"medium"} margin={{ top: "small" }}>
          {newResponses.map((response, index) => (
            <SingleResponseEditor
              key={index}
              response={response}
              index={index}
            />
          ))}
        </Box>
      )}

      <Box align={"center"} pad={"small"}>
        <Button
          icon={<PlusCircle />}
          label={"Add Response"}
          gap={"small"}
          plain={true}
          onClick={onAddResponseClicked}
        />
      </Box>
    </Box>
  )
}

export default ResponseEditor
