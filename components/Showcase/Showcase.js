import { Box, Typography } from "@mui/material";
import Image from "next/future/image";
import img from "/public/showcase-background.jpg";

export default function Showcase() {
  return (
    <>
      <Box
        sx={{
          overflow: "hidden",
          mt: 8,
          background: "black",
        }}
      >
        <Typography
          variant={"h2"}
          sx={{
            color: "white",
            textAlign: "center",
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            textTransform: "uppercase",
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          IT Team
        </Typography>
        <Box
          sx={{
            "&:hover": { transform: "scale(1.1)" },
            opacity: "0.7",
            overflow: "hidden",
            transition: "transform .5s ease",
          }}
        >
          <Image
            src={img}
            alt={"background-image"}
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
              position: "relative",
            }}
          />
        </Box>
      </Box>
    </>
  );
}
