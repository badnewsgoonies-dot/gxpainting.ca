import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Skeleton from "@mui/material/Skeleton";
import { items } from "@/src/data/gallery"; // adjust to relative if not using alias

function ImgWithPlaceholder({ src, alt }: { src: string; alt?: string }) {
  const [loaded, setLoaded] = React.useState(false);
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      {!loaded && <Skeleton variant="rounded" sx={{ position: "absolute", inset: 0, height: "100%" }} />}
      <img
        src={src}
        alt={alt ?? "GX Painting project photo"}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        style={{
          position: "relative",
          width: "100%",
          height: "auto",
          display: "block",
          borderRadius: "0.75rem",
          objectFit: "cover"
        }}
      />
    </Box>
  );
}

export default function Gallery() {
  const theme = useTheme();
  const upLg = useMediaQuery(theme.breakpoints.up("lg"));
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const upSm = useMediaQuery(theme.breakpoints.up("sm"));

  const cols = upLg ? 4 : upMd ? 3 : upSm ? 2 : 1;
  const gap = upSm ? 12 : 8;

  return (
    <Box className="gx-gallery" sx={{ px: { xs: 2, md: 4 }, py: { xs: 2, md: 4 } }}>
      <ImageList variant="masonry" cols={cols} gap={gap}>
        {items.map((item, idx) => (
          <ImageListItem key={idx}>
            <ImgWithPlaceholder src={item.src} alt={item.alt} />
            {(item.title || item.subtitle) && (
              <ImageListItemBar title={item.title} subtitle={item.subtitle} position="below" />
            )}
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}