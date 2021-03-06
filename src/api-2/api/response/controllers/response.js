"use strict";
const admin = require("firebase-admin");

var appInitialized = false;

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async notify(ctx) {
    if (!appInitialized) {
      var serviceAccount = require("./firebase-keys.json");
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://tattle-khoj.firebaseio.com",
      });
      appInitialized = true;
    }

    const { token, title, byline, queryId } = ctx.request.body;
    console.log({ token, title, byline, queryId });

    var message = {
      data: {
        queryId,
        body: byline,
        title,
      },
      token,
    };

    return admin
      .messaging()
      .send(message)
      .then((response) => {
        // Response is a message ID string.
        console.log("Successfully sent message:", response);
        return "done";
      })
      .catch((error) => {
        console.log("Error sending message:", error);
        return "error";
      });
  },
};
