import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "./../utils/fetchFromAPI";

const ChennelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setchannelDetail(data?.items[0]);
    });

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setvideos(data?.items);
        // setchannelDetail(data?.items[0]);
      }
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(13,14,14,0.8463760504201681) 0%, rgba(49,44,133,1) 3%, rgba(21,17,34,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box display="flex" p={2}>
        <Box sx={{ mr: { sm: "150px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChennelDetail;
