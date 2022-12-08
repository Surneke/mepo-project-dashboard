import { useState } from "react";
import infoIcon from "../../icon/InfoCircle.svg"
import { Box, Button, Typography, Modal, Divider } from "@mui/material";

export const BasicModal = ({ el }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(el);
  return (
    <div>
      <Button onClick={handleOpen}>
        <img src={infoIcon} alt="icon" />
      </Button>
      <Modal open={open} onClick={handleClose}>
        <Box sx={style.container}>
          <Typography variant="h6">ORDER DETAIL</Typography>
          <Typography sx={{ opacity: 0.7 }}>This is order detail owkaaiiii.</Typography>
          <Box>
            <Typography variant="body2" mt="15px">
              Customer imformation
            </Typography>
            <Box style={style.list}>
              <Typography sx={style.text1}>Order ID</Typography>
              <Typography variant="body2">{el.id}</Typography>
            </Box>
            <Box style={style.list}>
              <Typography sx={style.text1}>Customer</Typography>
              <Typography variant="body2">{el.row.fullname}</Typography>
            </Box>
            <Box style={style.list}>
              <Typography sx={style.text1}>Number</Typography>
              <Typography variant="body2">{el.row.phoneNumber}</Typography>
            </Box>
          </Box>
          <Divider sx={{ marginTop: "10px", color: "#f2f2f9" }} />
          <Box>
            <Typography variant="body2" mt="15px">
              Order imfotmation
            </Typography>
            <Box style={style.list}>
              <Typography sx={style.text1}>Payment</Typography>
              <Typography variant="body2">{el.row.paymentID}</Typography>
            </Box>
            <Box style={style.list}>
              <Typography sx={style.text1}>Size</Typography>
              <Typography variant="body2">{el.row.size}</Typography>
            </Box>
            <Box style={style.list}>
              <Typography sx={style.text1}>QTY</Typography>
              <Typography variant="body2">{el.row.amount}</Typography>
            </Box>
            <Box style={style.list}>
              <Typography sx={style.text1}>Color</Typography>
              <Typography variant="body2">{el.row.color}</Typography>
            </Box>
            <Box style={style.list}>
              <Typography sx={style.text1}>Purchased on </Typography>
              <Typography variant="body2">{Date(el.row.createdAt).toLocaleString().slice(0, 15)}</Typography>
            </Box>
          </Box>
          <Divider sx={{ marginTop: "10px", color: "#f2f2f9" }} />
          <Box>
            <Typography variant="body2" mt="15px">
              Location
            </Typography>
            <Box style={style.list}>
              <Typography sx={style.text1}>Country</Typography>
              <Typography variant="body2">{el.row.user.address.country}</Typography>
            </Box>
            <Box style={style.list}>
              <Typography sx={style.text1}>City</Typography>
              <Typography variant="body2">{el.row.user.address.citySoum}</Typography>
            </Box>
            <Box style={style.list}>
              <Typography sx={style.text1}>Discrict</Typography>
              <Typography variant="body2">{el.row.user.address.stateProvince}</Typography>
            </Box>
            <Box style={style.list}>
              <Typography sx={style.text1}>Zip code</Typography>
              <Typography variant="body2">{el.row.user.address.zipPostcode}</Typography>
            </Box>
            <Box style={style.list}>
              <Typography sx={style.text1}> Detail address </Typography>
              <Typography variant="body2" sx={{ maxWidth: "180px", textAlign: "end" }}>
                {el.row.user.address.detail}
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" mt="25px">
            <Button variant="contained" onClick={handleClose}>
              Close
            </Button>
            <Button variant="contained" color="info">
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
const style = {
  container: {
    p: 4,
    top: "50%",
    left: "50%",
    width: 500,
    height: 650,
    position: "absolute",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
  },
  list: {
    width: "440px",
    display: "flex",
    marginTop: "10px",
    justifyContent: "space-between",
  },
  text1: {
    fontSize: "12px",
    color: "#81838F",
  },
};