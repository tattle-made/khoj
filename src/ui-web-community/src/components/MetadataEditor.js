import React, { useState } from "react"
import { Box, Grommet, Button, Select, Heading, Text } from "grommet"
import axios from "axios"
import TattleTheme from "./atomic/theme"

const KHOJ_API_URL = process.env.KHOJ_API_URL || "http://localhost:1337"

/**
 * @author
 * @function MetadataEditor
 **/

const MetadataEditor = ({ queryId }) => {
  const [metadata, setMetadata] = useState({})

  const onAnnotationChanged = (fieldName, value) => {
    console.log({ fieldName, value })
    setMetadata({
      ...metadata,
      [fieldName]: value,
    })
  }

  const onSave = async () => {
    const token = sessionStorage.getItem("jwt")

    const data = {
      metadata,
    }

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
    <Box
      direction={"column"}
      background={"light-1"}
      pad={"small"}
      round={"small"}
    >
      <Heading level={4} margin={{ top: "none", bottom: "small" }}>
        Metadata
      </Heading>
      <Box gap={"medium"}>
        <Box gap={"small"} direction={"column"}>
          <Box direction={"column"}>
            <Text size={"medium"}> Theme </Text>
            <Select
              name={"Theme"}
              options={[
                "health",
                "politics",
                "meme",
                "hate speech",
                "violence",
                "other",
              ]}
              value={metadata.theme}
              onChange={option => onAnnotationChanged("theme", option.value)}
            />
          </Box>

          <Box direction={"column"}>
            <Text size={"medium"}> Response Duration </Text>
            <Select
              name={"Response Duration"}
              options={[
                "one_hour",
                "one_day",
                "three_days",
                "one week",
                "indeterminate",
              ]}
              value={metadata.response_duration}
              onChange={option =>
                onAnnotationChanged("response_duration", option.value)
              }
            />
          </Box>

          <Box direction={"column"}>
            <Text size={"medium"}> Response Sensitivity </Text>
            <Select
              name={"Response Sensitivity"}
              options={["objective", "sensitive", "opinionated"]}
              value={metadata.response_sensitivity}
              onChange={option =>
                onAnnotationChanged("response_sensitivity", option.value)
              }
            />
          </Box>
        </Box>
        <Button label={"Save"} onClick={onSave} />
      </Box>
    </Box>
  )
}

export default MetadataEditor

/*
usage example <MetadataEditor queryId={"asdfas-asdfasdf-asdfasdf"} />
*/
