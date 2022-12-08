import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export const LogoutModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}><Typography></Typography></Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Log out?
          </Typography>
          <Typography mt="5px" sx={{ opacity: 0.7 }}>
            Are sure you would like to logout of your account?
          </Typography>
          <Box display="flex" justifyContent="space-between" mt="30px" >
            <Button variant='contained' sx={{margin:"0px 30px"}}>Close</Button>
            <Button variant='contained'>Yes</Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}