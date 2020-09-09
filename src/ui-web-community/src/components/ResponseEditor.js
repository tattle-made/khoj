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

const ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
  UPDATE: "update",
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return state
    case ACTIONS.REMOVE:
      return state
    case ACTIONS.UPDATE:
      return state
    default:
      return state
  }
}

const ResponseEditor = ({ queryId, communityResponses }) => {
  const [activeCommunityResponses, setActiveCommunityResponses] = useState(
    communityResponses
  )

  useEffect(() => {
    console.log("init effect")
    setActiveCommunityResponses(communityResponses)
  }, communityResponses)

  useEffect(() => {
    console.log("active comm resp changed")
    console.log(communityResponses)
  }, activeCommunityResponses)

  const onClickSave = async () => {
    // const token = sessionStorage.getItem("jwt")
    console.log("communityResponses ", communityResponses)
    // console.log("activeCommunityResponses ", activeCommunityResponses)

    communityResponses.map(communityResponse => {
      var config = {
        method: "put",
        url: `${process.env.KHOJ_API_URL}/responses/${communityResponse.id}`,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
          "Content-Type": "application/json",
        },
        data: communityResponse,
      }

      axios(config)
        .then(response => console.log(JSON.stringify(response.data)))
        .catch(err => console.log(err))
    })
  }

  const onAddResponseClicked = () => {
    console.log("click ")
    setActiveCommunityResponses([
      ...activeCommunityResponses,
      emptyTextResponse,
    ])
    // setNewResponses([...newResponses, emptyTextResponse])
  }

  const onResponseUpdate = (type, index, newValue) => {
    // console.log(index, newValue)
    // communityResponses[index] = newValue
    // console.log(communityResponses)

    communityResponses[index][type] = newValue
    console.log({ communityResponses })
  }

  const onResponseRemove = index => {
    console.log("removed", index)
    // setActiveCommunityResponses(
    // activeCommunityResponses.filter((response, i) => {
    // console.log({ i, response })
    // return i !== index
    // })
    // )

    setActiveCommunityResponses(
      activeCommunityResponses.filter((r, i) => i !== index)
    )
  }

  return (
    <Box direction={"column"} background={"light-1"} round={"small"}>
      <Box direction={"row"}>
        <Box flex={"grow"}>
          <Heading
            level={2}
            margin={{ top: "none", bottom: "small" }}
          ></Heading>
        </Box>
        <Button default label={"Save"} onClick={onClickSave} />
      </Box>

      {activeCommunityResponses && (
        <Box direction={"column"} gap={"medium"}>
          {activeCommunityResponses.map((response, index) => (
            <SingleResponseEditor
              key={index}
              response={response}
              index={index}
              onUpdate={onResponseUpdate}
              onRemove={onResponseRemove}
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
