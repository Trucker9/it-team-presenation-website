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
          mb: 16,
          background: "black",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
            "&:hover": {
              color: "primary.main",
            },
          }}
        >
          <Typography
            variant={"h2"}
            component={"h1"}
            sx={{
              textAlign: "center",
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textTransform: "uppercase",
            }}
          >
            IT Team
          </Typography>
          <Typography component={"p"} variant={"body2"}>
            This will be some dummy title about something i do not know about
          </Typography>
        </Box>

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
              height: "400px",
              objectFit: "cover",
              position: "relative",
            }}
          />
        </Box>
      </Box>
    </>
  );
}
