import React, { useState } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import axios from 'axios';
import {DialogTitle,DialogContentText,DialogContent,DialogActions,Dialog} from '@mui/material';


export default function CustomerDelete({customer, id, isDelete, callAPI, name}) {
    const [open, setOpen]=useState(false);

    const onDelete = async(id) => {
        const res=await axios.post('/customers/delete/'+id);
        if(res.status===200){
            callAPI();
            setOpen(false);
        }
    }
    
  return (
    <Stack direction="row" spacing={2}>
      <Button variant='contained' color='error' startIcon={<DeleteIcon />} onClick={() => setOpen(true)}>탈퇴</Button>
      {/*다이얼로그 박스*/}
      <Dialog open={open}>
        <DialogTitle >
            탈퇴경고
        </DialogTitle>
        <DialogContent>
            <DialogContentText >
                {id}번 회원님 탈퇴하실래요?
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