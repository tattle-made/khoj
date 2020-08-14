const addImageResponse = ({ token, queryId, caption, file }) => {
  const data = new FormData()
  const parameters = {
    is_summary: false,
    is_shareable: false,
    type: "image",
    image: {
      caption: caption,
    },
    queries: [queryId],
  }
  data.append("data", JSON.stringify(parameters))
  data.append("files.image.image", file)
  return axios({
    method: "POST",
    url: "http://localhost:1337/responses",
    data,
    onUploadProgress: progress => {
      console.log("uploading : ", progress)
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => console.log("success : ", res))
    .catch(err => console.log("error : ", err))
}

const addUrlResponse = ({
  token,
  queryId,
  headline,
  byline,
  url,
  thumbnail,
}) => {
  const token = sessionStorage.getItem("jwt")
  // console.log(token)
  console.log(urlResponseData)
  const data = new FormData()
  const parameters = {
    is_summary: false,
    is_shareable: false,
    type: "url",
    url: {
      headline: headline,
      byline: byline,
      url: url,
    },
    queries: [queryId],
  }
  data.append("data", JSON.stringify(parameters))
  data.append("files.url.thumbnail", thumbnail)
  return axios({
    method: "POST",
    url: "http://localhost:1337/responses",
    data,
    onUploadProgress: progress => {
      console.log("uploading : ", progress)
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => console.log("success : ", res))
    .catch(err => console.log("error : ", err))
}
