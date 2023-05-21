import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ImgList from "./ImgList";
import InfiniteScroll from "react-infinite-scroller";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [imageList, setImageList] = useState([]);

  const loadFunc = (pageNo) => {
    axios
      .get(
        `https://api.unsplash.com/search/photos/?query=${searchParams.get(
          "office"
        )}&page=1&per_page=20&client_id=sY2cykZbUUSjRNSBmLroQLDp65cQr6unltFGpa1pvhY`
      )
      .then((response) =>
        setImageList((list) => [...list, ...response.data.results])
      );
  };
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadFunc}
      hasMore={true || false}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      <ImgList images={imageList} />
    </InfiniteScroll>
  );
};

export default Search;
