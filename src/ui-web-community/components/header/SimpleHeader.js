import React from "react"
import { Box, Heading, Text, Button } from "grommet"
import AppLogo from "@bit/tattle-tech.core-ui.app-logo"
import { Link } from "@bit/tattle-tech.core-ui.links"
import styled from "styled-components"
import { Search, LogOut, User } from "react-feather"

const IconComponents = {
  search: <Search />,
  user: <User />,
  logout: <LogOut />,
}

const ThemedLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  :visited {
    color: inherit;
  }
`

/**
 * @author
 * @function SimpleHeader
 **/

const SimpleHeader = ({ label, target, primaryNav, showNav }) => (
  <Box direction={"row"} wrap={true}>
    <AppLogo name={label} target={target} />

    <Box
      margin={{ left: "large" }}
      pad={"small"}
      direction={"row"}
      align={"center"}
      gap={"medium"}
      flex={"grow"}
    >
      {showNav &&
        primaryNav.main.map(option => (
          <ThemedLink key={option.id} to={option.target}>
            <Button plain={true}>
              <Heading margin={"none"} level={3}>
                {""}
                {option.label}{" "}
              </Heading>
            </Button>
          </ThemedLink>
        ))}
    </Box>
    <Box
      direction={"row"}
      align={"center"}
      gap={"small"}
      margin={{ right: "small" }}
    >
      {showNav &&
        primaryNav.miniatures.map(miniature => (
          <ThemedLink key={miniature.id} to={miniature.target}>
            <Button plain={true} icon={IconComponents[miniature.icon]} />
          </ThemedLink>
        ))}
    </Box>
  </Box>
)

export default SimpleHeader
