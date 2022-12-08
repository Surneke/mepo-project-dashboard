import { useState } from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';

export const ProductInputModal = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen} variant="contained">
                Next
            </Button>
            <Modal
                open={open}
            >
                <Box sx={style.container}>
                    <Typography variant="h6" >
                        ORDER DETAaiuefuwehfiuehwqfeuiwqhIL
                    </Typography>
                    <Typography sx={{ opacity: 0.7 }} >
                        The first image you add becomes the main image for this product.
                    </Typography>
                    <Box>
                        <Typography variant='body2' mt="20px">Customer imformation</Typography>
                        <Box style={style.list}>
                            <Typography sx={style.text1} >Order ID</Typography>
                            <Typography variant='body2' >{props._id}</Typography>
                        </Box>
                        <Box style={style.list}>
                            <Typography sx={style.text1} >Customer</Typography>
                            <Typography variant='body2' >{props.fullname}</Typography>
                        </Box>
                        <Box style={style.list}>
                            <Typography sx={style.text1} >Number</Typography>
                            <Typography variant='body2' >{props.phoneNumber}</Typography>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Button variant='contained' onClick={handleClose}>Back</Button>
                        <Button variant='contained' color='info' onClick={handleClose}>Save</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
const style = {
    container: {
        p: 4,
        top: '50%',
        left: '50%',
        width: 500,
        height: 500,
        position: 'absolute',
        bgcolor: 'background.paper',
        transform: 'translate(-50%, -50%)',
    },
    list: {
        width: "440px",
        display: 'flex',
        marginTop: "10px",
        justifyContent: "space-between"
    },
    text1: {
        fontSize: '12px',
        color: "#81838F"
    }
};