module.exports = ({ env }) => {
  return {
    accessKey: env("AWS_ACCESS_KEY_ID"),
    secretAccessKey: env("AWS_ACCESS_SECRET"),
  };
};
