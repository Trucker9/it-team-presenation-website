import { Box } from "@mui/material";
import Image from "next/future/image";
import browserImage from "../../public/browser.jpg";

export default function BrowserWindow({ src }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/*<iframe*/}
      {/*  src={"https://digikala.com/"}*/}
      {/*  height="400px"*/}
      {/*  frameBorder="0"*/}
      {/*  allowFullScreen*/}
      {/*  style={{*/}
      {/*    mx: "auto",*/}

      {/*    width: "80%",*/}
      {/*  }}*/}
      {/*/>*/}

      <Image
        src={browserImage}
        style={{
          width: "70%",
        }}
      />
    </Box>
  );
}
