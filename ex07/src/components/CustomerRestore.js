import React, { useState } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import {DialogTitle,DialogContentText,DialogContent,DialogActions,Dialog} from '@mui/material';


const CustomerRestore = ( {id, callAPI}) => {
    const [open, setOpen]=useState(false);

    const onDelete = async(id) => {
        const res=await axios.post('/customers/restore/'+id);
        if(res.status===200){
            callAPI();
            setOpen(false);
        }
    }
  return (
    <Stack direction="row" spacing={2}>
    <Button variant='contained'  startIcon={<DeleteIcon />} onClick={() => setOpen(true)}>복구</Button>
    {/*다이얼로그 박스*/}
    <Dialog open={open}>
      <DialogTitle >
      복구경고
      </DialogTitle>
      <DialogContent>
          <DialogContentText >
              {id}번 회원님 복구하실래요?
          </DialogContentText>
      </DialogContent>
      <DialogActions>
          <Button variant='outlined' color='error' onClick={()=>onDelete(id)}>Yes</Button>
          <Button variant='outlined' onClick={()=>setOpen(false)}>No</Button>
      </DialogActions>
    </Dialog>
  </Stack>
  );
}

export default CustomerRestore