import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoChannelUrl,
  demoVideoTitle,
  demoVideoUrl,
} from "../utils/constans";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "90vw", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: "0",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            height: 180,
            // mb: "-40px",
          }}
        />
      </Link>
      <CardContent
        sx={{ backgroundColor: "#1e1e1e", height: "65px", marginTop: 0 }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 30) || demoVideoTitle}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="gray"
            fontSize="15px"
          >
            {snippet?.channelTitle.slice(0, 30) || demoVideoTitle}
            <CheckCircle sx={{ fontSize: "10px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
