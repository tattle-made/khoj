import React, { useState } from "react"
import { Box, Grommet, Button, TextInput } from "grommet"
import TattleTheme from "../atomic/theme"
import Dropzone from "react-dropzone"
import axios from "axios"

const Queries = () => {
  const [question, setQuestion] = useState("")
  const [files, setFiles] = useState([])

  const onSubmit = async () => {
    const data = new FormData()

    files.map(file => {
      data.append("files.media", file)
    })
    data.append("data", JSON.stringify({ question: question }))

    const token = sessionStorage.getItem("jwt")

    const upload_res = await axios({
      method: "POST",
      url: process.env.GATSBY_API_URL + "/queries",
      data,
      onUploadProgress: progress => {
        console.log("uploading : ", progress)
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    console.log("Upload Result", upload_res)
  }

  return (
    <Grommet theme={TattleTheme}>
      <Box pad="medium" gap={"medium"}>
        <Box gap={"small"} direction={"row"}>
          <Dropzone onDrop={acceptedFiles => setFiles(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <Box
                border={{ style: "dashed", size: "small" }}
                round={"small"}
                flex={"grow"}
              >
                <Box pad={"medium"} {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </Box>
              </Box>
            )}
          </Dropzone>
          <TextInput
            placeholder="type here"
            value={question}
            onChange={event => setQuestion(event.target.value)}
          />
        </Box>
        <Button label={"submit"} onClick={onSubmit} />
      </Box>
    </Grommet>
  )
}

export default Queries
