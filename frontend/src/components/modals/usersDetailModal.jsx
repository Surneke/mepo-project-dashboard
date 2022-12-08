import { useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import infoIcon from "../../icon/InfoCircle.svg"


export const UserModal = ({ el }) => {
    console.log(el, "kjewdkefk");
    //   useEffect(())
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const orders = el.orders;
    console.log(orders);
    return (
        <div>
            <Button onClick={handleOpen}>
                <img alt="icon" src={infoIcon} />
            </Button>
            <Modal open={open}>
                <Box sx={style.container}>
                    <Typography variant="h6">{el._id} USERS ORDER HISTORY</Typography>
                    <Typography sx={{ opacity: 0.7 }}>All users has unique ID. </Typography>
                    <Box height="400px" width="300px" mt="30px">
                        {orders?.map((el) => <Typography>{el}</Typography>)}
                    </Box>
                    <Box>
                        <Button variant="contained" onClick={handleClose} fullWidth>
                            Close
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
        height: 500,
        position: "absolute",
        bgcolor: "background.paper",
        transform: "translate(-50%, -50%)",
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