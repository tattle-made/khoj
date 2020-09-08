"use strict";
const AWS = require("aws-sdk");

//
// import { initRolesAndPermissions } from "./bootstrap-helper/init-roles-and-permissions";
//
/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

module.exports = () => {
  console.log("--FETCHING FIREBASE KEYS--");
  //   console.log(strapi.config.get("aws.accessKey", ""));
  //   console.log(strapi.config.get("aws.secretAccessKey", ""));
  AWS.config.update({
    accessKeyId: strapi.config.get("aws.accessKey", ""),
    secretAccessKey: strapi.config.get("aws.secretAccessKey", ""),
  });

  try {
    var s3 = new AWS.S3({ apiVersion: "2006-03-01" });
    var params = {
      Bucket: "tattle-keys",
      Key: "tattle-khoj-firebase.json",
    };
    var file = require("fs").createWriteStream(
      "./api/response/controllers/firebase-keys.json"
    );
    s3.getObject(params).createReadStream().pipe(file);
  } catch (err) {
    console.log("error fetching firebase keys ", err);
  }
};
