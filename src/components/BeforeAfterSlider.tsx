import { Box, Typography } from "@mui/material";
import { useState } from "react";

type Props = {
  before: string;
  after: string;
  altBefore?: string;
  altAfter?: string;
  caption?: string;
};

export default function BeforeAfterSlider({ before, after, altBefore, altAfter, caption }: Props) {
  const [pos, setPos] = useState(50);
  return (
    <Box sx={{ my: 3 }}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          boxShadow: 3,
          aspectRatio: "16 / 9",
          backgroundColor: "#0b0e14",
        }}
      >
        <img src={after} alt={altAfter || "After"} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <img
          src={before}
          alt={altBefore || "Before"}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            clipPath: `inset(0 ${100 - pos}% 0 0)`,
            transition: "clip-path 80ms linear",
          }}
        />
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(parseInt(e.target.value, 10))}
          aria-label="Slide to compare before and after"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            WebkitAppearance: "none",
            appearance: "none",
            background: "transparent",
            cursor: "ew-resize",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${pos}%`,
            width: 2,
            background: "rgba(255,255,255,0.8)",
            transform: "translateX(-1px)",
            pointerEvents: "none",
          }}
        />
      </Box>
      {caption && (
        <Typography variant="body2" sx={{ mt: 1, opacity: 0.75 }}>
          {caption}
        </Typography>
      )}
    </Box>
  );
}
