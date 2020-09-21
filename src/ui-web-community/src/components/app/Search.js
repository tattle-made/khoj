import React, { useState, useEffect } from "react"
import { Box, Heading, Text } from "grommet"
import {
  ReactiveBase,
  DataSearch,
  CategorySearch,
  SingleRange,
  ResultCard,
  ReactiveList,
} from "@appbaseio/reactivesearch"
import QueryPreview from "../QueryPreview"

/**
 * @author
 * @function Search
 **/

const Search = () => {
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    setFetching(true)
  })

  return (
    <Box pad="medium">
      <ReactiveBase
        app={"khoj"}
        url={
          "https://ne9dlXOyr:0f92a3f0-c48c-4575-8676-d75d191e7d48@tattle-search-bhhpxqt-arc.searchbase.io/"
        }
        enableAppbase={true}
        theme={{
          typography: {
            fontFamily: "Raleway, Helvetica, sans-serif",
          },
          colors: {
            primaryColor: "#514E80",
            titleColor: "white",
            primaryTextColor: "#fff",
            primaryColor: "#514E80",
            alertColor: "#d9534f",
          },
        }}
      >
        <DataSearch
          componentId="SearchSensor"
          dataField={[
            "question",
            "responses.text.heading",
            "responses.text.byline",
            "responses.image.caption",
            "responses.url.headline",
            "responses.url.byline",
            "responses.url.url",
          ]}
        />

        <ReactiveList
          componentId="result"
          title="Results"
          dataField="model"
          from={0}
          size={5}
          pagination={true}
          react={{
            and: ["SearchSensor"],
          }}
          render={({ data }) => (
            <ReactiveList.ResultCardsWrapper>
              <Box direction={"column"} fill>
                {data.map(item => {
                  return <QueryPreview query={item} />
                })}
              </Box>
            </ReactiveList.ResultCardsWrapper>
          )}
        />
      </ReactiveBase>
    </Box>
  )
}

export default Search
