import { Box, ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function Selector() {
  const buttons = () => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          sx={{
            borderRadius: 0,
            p: 3,
            borderRight: 1,
            borderColor: "grey.800",
          }}
        >
          <AcUnitIcon sx={{ mr: 1 }} /> Website 1
        </IconButton>
      );
    }
    return arr;
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          flexWrap: "wrap",
          overflowX: "scroll",
          height: 150,
          backgroundColor: "#2f2d2d",
        }}
      >
        <Box sx={{}}>{buttons()}</Box>
      </Box>
    </>
  );
}
