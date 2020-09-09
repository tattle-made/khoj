import React, { useState, useEffect } from "react"
import { Box, Button, Layer, Heading, Text, TextArea, TextInput } from "grommet"
import axios from "axios"
/**
 * @author
 * @function NotificationComposer
 **/

const NotificationComposer = ({ queryId, userToken }) => {
  const [showComposer, setShowComposer] = useState(false)
  const [notificationTitle, setNotificationTitle] = useState("")
  const [notificationByline, setNotificationByline] = useState("")

  const onClose = () => {
    setShowComposer(false)
  }

  const onSendNotification = () => {
    console.log({ queryId, userToken })
    // var data = JSON.stringify({
    //   token:
    // "e3DE7V-rTA6YN6-jlEOleY:APA91bEFBPODsEwWMEvWIZkTlXW6WMsGh1SM0oefUbGUJ13SAV9kP7mMTA8YE1Zdz3JMfuyHqWUK504j1dF1byE_jcLZuqGokcbcJDxiAW7EncHOGD91dXpzz3Hj75F_xlQ0YRFEJkMB",
    //   title: notificationTitle,
    //   byline: notificationByline,
    //   queryId: "5f57c76142418e001df2763a",
    // })
    // var config = {
    //   method: "post",
    //   url: `${process.env.KHOJ_API_URL}/responses/notify`,
    //   headers: {
    // Authorization: `Bearer ${sessionStorage.getItem("jwt")}`,
    // "Content-Type": "application/json",
    //   },
    //   data: data,
    // }
    //
    // axios(config)
    //   .then(response => console.log(JSON.stringify(response.data)))
    //   .catch(err => console.log(err))
  }

  return (
    <>
      <Button
        primary
        onClick={() => setShowComposer(true)}
        label={"Notify User"}
      />

      {showComposer && (
        <Layer position="center" onClickOutside={onClose} onEsc={onClose}>
          <Box pad="medium" gap="small" width="large">
            <Heading level={4} margin="none">
              Compose Notification Message for User
            </Heading>
            <Box direction={"column"} gap={"small"}>
              <TextInput
                placeholder="Title"
                value={notificationTitle}
                onChange={event => setNotificationTitle(event.target.value)}
              />
              <Box height={"small"}>
                <TextArea
                  placeholder="Byline"
                  value={notificationByline}
                  onChange={event => setNotificationByline(event.target.value)}
                  fill
                />
              </Box>
            </Box>
            <Button primary label={"Send"} onClick={onSendNotification} />
          </Box>
        </Layer>
      )}
    </>
  )
}

export default NotificationComposer
