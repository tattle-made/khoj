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
import Dropzone from "react-dropzone"
import { Trash } from "react-feather"

export const emptyTextResponse = {
  type: "text",
  text: {
    heading: "",
    byline: "",
  },
}

const emptyImageResponse = {
  type: "image",
  image: {
    caption: "",
    image: {
      formats: {
        thumbnail: {
          url: "",
        },
      },
    },
  },
}

const emptyUrlResponse = {
  type: "url",
  url: {
    thumbnail: {
      formats: {
        thumbnail: {
          url: "",
        },
      },
    },
    headline: "",
    byline: "",
    url: "",
  },
}

const emptySummaryResponse = {
  type: "summary",
  summary: {
    heading: "",
    paragraph: "",
    url: "",
  },
}

const SingleResponseEditor = ({ response, index, onUpdate, onRemove }) => {
  const [responseType, setResponseType] = useState(
    response ? response.type : "text"
  )
  const [activeResponse, setActiveResponse] = useState(response)
  const [textResponseData, setTextResponseData] = useState(
    response.text ? response.text : emptyTextResponse.text
  )
  const [imageResponseData, setImageResponseData] = useState(
    response.image ? response.image : emptyImageResponse.image
  )
  const [urlResponseData, setUrlResponseData] = useState(
    response.url ? response.url : emptyUrlResponse.url
  )

  const [summaryResponseData, setSummaryResponseData] = useState(
    response.summary ? response.summary : emptySummaryResponse.summary
  )

  const testButton = () => {
    const token = sessionStorage.getItem("jwt")
    // console.log(token)
  }

  useEffect(
    () => {
      console.log("something changed")
      switch (responseType) {
        case "text":
          onUpdate("text", index, textResponseData)
          break
        case "image":
          onUpdate("image", index, imageResponseData)
          break
        case "url":
          onUpdate("url", index, urlResponseData)
          break
        case "summary":
          onUpdate("summary", index, summaryResponseData)
          break
        case "default":
          return
      }
    },
    textResponseData,
    imageResponseData,
    urlResponseData,
    summaryResponseData
  )

  return (
    <Box
      gap={"large"}
      background={index % 2 === 0 ? "light-1" : "light-3"}
      pad={"small"}
    >
      <Box direction={"row"} gap={"small"} align={"center"}>
        <Box flex={"grow"}>
          <Select
            name={"Theme"}
            options={["text", "image", "url", "summary"]}
            value={responseType}
            onChange={option => setResponseType(option.value)}
          />
        </Box>
        <Button
          icon={<Trash />}
          focusIndicator={false}
          onClick={() => onRemove(index)}
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
          <Box height={"small"}>
            <TextArea
              placeholder="Byline"
              value={textResponseData.byline}
              onChange={event =>
                setTextResponseData({
                  ...textResponseData,
                  ["byline"]: event.target.value,
                })
              }
              fill
            />
          </Box>
        </Box>
      )}
      {responseType === "image" && (
        <Box direction={"column"} gap={"small"}>
          <Dropzone
            onDrop={acceptedFiles => {
              console.log(acceptedFiles)
              setImageResponseData({
                ...imageResponseData,
                ["file"]: acceptedFiles,
                ["preview"]: URL.createObjectURL(acceptedFiles[0]),
              })
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <Box>
                <Box
                  border={true}
                  round={"xsmall"}
                  pad={"small"}
                  {...getRootProps()}
                  direction={"column"}
                >
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop image here, or click to select file</p>
                  {imageResponseData.image && (
                    <Box height="xsmall" width="xsmall">
                      <Image
                        fit="contain"
                        src={
                          imageResponseData.preview
                            ? imageResponseData.preview
                            : imageResponseData.image.formats.thumbnail.url
                        }
                      />
                    </Box>
                  )}
                </Box>
              </Box>
            )}
          </Dropzone>

          <TextArea
            placeholder="Caption"
            value={imageResponseData.caption}
            onChange={event =>
              setImageResponseData({
                ...imageResponseData,
                ["caption"]: event.target.value,
              })
            }
          />
        </Box>
      )}
      {responseType === "url" && (
        <Box direction={"column"} gap={"small"}>
          <TextInput
            placeholder="Heading"
            value={urlResponseData.headline}
            onChange={event =>
              setUrlResponseData({
                ...urlResponseData,
                ["headline"]: event.target.value,
              })
            }
          />
          <TextArea
            placeholder="Byline"
            value={urlResponseData.byline}
            onChange={event =>
              setUrlResponseData({
                ...urlResponseData,
                ["byline"]: event.target.value,
              })
            }
          />
          <TextArea
            placeholder="url"
            value={urlResponseData.url}
            onChange={event =>
              setUrlResponseData({
                ...urlResponseData,
                ["url"]: event.target.value,
              })
            }
          />
          <Dropzone
            onDrop={acceptedFiles => {
              console.log(acceptedFiles)
              setUrlResponseData({
                ...urlResponseData,
                ["thumbnail"]: acceptedFiles,
                ["preview"]: URL.createObjectURL(acceptedFiles[0]),
              })
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <Box>
                <Box
                  border={true}
                  round={"xsmall"}
                  pad={"small"}
                  {...getRootProps()}
                  direction={"column"}
                >
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                  {urlResponseData.thumbnail && (
                    <Box height="xsmall" width="xsmall">
                      <Image
                        fit="contain"
                        src={
                          urlResponseData.preview
                            ? urlResponseData.preview
                            : urlResponseData.thumbnail.formats.thumbnail.url
                        }
                      />
                    </Box>
                  )}
                </Box>
              </Box>
            )}
          </Dropzone>
        </Box>
      )}
      {responseType === "summary" && (
        <Box direction={"column"} gap={"small"}>
          <TextInput
            placeholder="Heading"
            value={summaryResponseData.heading}
            onChange={event =>
              setSummaryResponseData({
                ...summaryResponseData,
                ["heading"]: event.target.value,
              })
            }
          />
          <TextArea
            placeholder="Byline"
            value={summaryResponseData.paragraph}
            onChange={event =>
              setSummaryResponseData({
                ...summaryResponseData,
                ["paragraph"]: event.target.value,
              })
            }
          />
        </Box>
      )}
    </Box>
  )
}

export default SingleResponseEditor
