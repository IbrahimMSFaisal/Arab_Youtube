import { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { SideBar, Videos } from "./";

import { fetchFromAPI } from "./../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippets&q=${selectedCategory}`).then((data) => {
      setvideos(data.items);
    });
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { md: "95vh", sx: "auto" },
          borderRight: "1px solid #eee",
          px: { sx: 0, md: " 2px" },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant=" body2"
          sx={{ color: "#fff", mt: 1.5, mb: 0 }}
        >
          © 2023 Ibrahim Faisal. All Rights Reserved.
        </Typography>
      </Box>
      <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#fff" }}
        >
          {selectedCategory} <span style={{ color: "#F31503" }}>Video</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};
export default Feed;
