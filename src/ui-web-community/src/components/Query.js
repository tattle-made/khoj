import React, { useState, useEffect } from "react"
import { Box, Heading, Text } from "grommet"
import { SinglePost } from "@bit/tattle-tech.core-ui.mediablock"

/**
 * @author
 * @function Query
 **/

const Query = () => {
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    setFetching(true)
  })

  return (
    <Box
      direction={"column"}
      background={"light-2"}
      pad={"small"}
      round={"small"}
    >
      <Heading level={2} margin={{ top: "none", bottom: "small" }}>
        Query
      </Heading>
      <Box direction={"row"} wrap>
        <Box margin={{ right: "xsmall" }} width={"8em"} height={"8em"}>
          <SinglePost
            type={"image"}
            src={"https://tattle-media.s3.amazonaws.com/post_image_1.jpeg"}
          />
        </Box>
        <Box margin={{ right: "xsmall" }} width={"8em"} height={"8em"}>
          <SinglePost
            type={"video"}
            src={
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            }
          />
        </Box>
        <Box margin={{ right: "xsmall" }} width={"8em"} height={"8em"}>
          <SinglePost
            type={"text"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec sapien egestas, condimentum nunc in, eleifend ligula. Pellentesque semper congue orci a porta. Nam cursus vehicula velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris vel venenatis velit, id efficitur mauris. Donec facilisis tincidunt erat, eget laoreet metus laoreet tempor. Phasellus sed odio sed urna dapibus facilisis. Etiam tincidunt nisl vel mi consectetur, eget tristique justo egestas. Proin commodo, erat eu tincidunt mollis, dui neque faucibus sapien, vel volutpat lorem arcu eu quam. Sed laoreet sed lectus ut scelerisque. Etiam eget sem in urna venenatis tempus ut a diam. Sed ac magna vel sapien aliquet finibus at eu leo. Duis venenatis, augue eu consectetur vehicula, tortor tellus eleifend dolor, ac luctus odio ipsum auctor dolor. Quisque rhoncus augue quis est pellentesque, non dapibus sapien malesuada. Nullam porttitor pellentesque ante, eget efficitur arcu viverra vitae. Proin ultrices ante at finibus gravida. Nulla sed arcu at ligula malesuada lacinia. Aliquam nec leo neque. Praesent tincidunt neque tortor. Donec eget ipsum eleifend, maximus massa non, congue ligula. Nulla nibh turpis, dapibus sollicitudin sem eu, sollicitudin pulvinar risus. Nunc aliquam ligula a turpis efficitur, eu finibus mi maximus. Integer et ultrices tellus. Pellentesque egestas velit sed velit tristique pulvinar. Nam ut aliquam risus, ut pulvinar augue. Cras porttitor dui vel sem rhoncus, eget condimentum urna cursus."
            }
          />
        </Box>
      </Box>
      <Box direction={"column"} margin={{ top: "small" }}>
        <Text size={"medium"}> Question </Text>
        <Text> {"text question goes here"}</Text>
      </Box>
    </Box>
  )
}

export default Query
