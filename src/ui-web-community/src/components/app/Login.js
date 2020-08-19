//TODO: Make Responsive

import React, { useState } from "react"
import { navigate } from "gatsby"
import useAuth from "../hooks/useAuth"
import { Heading, Text, TextInput, Box, Image, Button } from "grommet"
import { useStaticQuery, graphql } from "gatsby"

const Login = ({ redirect }) => {
  const { login } = useAuth()
  const [password, setPassword] = useState("admin@tattle")
  const [identifier, setIdentifier] = React.useState("admin")
  const [error, setError] = useState("")
  const logoFile = useStaticQuery(
    graphql`
      query {
        allFile(filter: { name: { eq: "project-logo" } }) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `
  )

  const logoURL = logoFile.allFile.edges[0].node.publicURL

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const r = await login({ identifier, password })
      sessionStorage.setItem("jwt", r.jwt)
      navigate("/app/queries")
    } catch (e) {
      console.log("Error occurred during authentication")
      const {
        response: {
          data: {
            message: [
              {
                messages: [error],
              },
            ],
          },
        },
      } = e
      const { message: msg } = error
      setError(msg)
    }
  }

  return (
    <Box direction="row">
      <Box>
        <Image fit="contain" src={logoURL} />
      </Box>
      <Box pad="medium" direction={"column"} flex={"grow"}>
        <Heading level={3}>Login</Heading>
        <Text>Please use your credentials to login</Text>

        <Box pad="small">
          <label htmlFor="username">Username</label>
          <TextInput
            placeholder="type here"
            value={identifier}
            onChange={event => setIdentifier(event.target.value)}
          />
        </Box>
        <Box pad="small">
          <label htmlFor="password">Password</label>
          <TextInput
            type="password"
            placeholder="type here"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </Box>
        <Box pad="medium">
          <Button
            onClick={handleSubmit}
            primary
            type="submit"
            label="Sign-In"
          />
        </Box>

        {error.length > 1 && (
          <p className="text-center text-red-500 bg-red-200 border p-2">
            {error}
          </p>
        )}
      </Box>
    </Box>
  )
}

export default Login
