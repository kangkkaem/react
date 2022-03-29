import React, { useRef, useState } from 'react'
import {Button, TextField} from '@mui/material'
import {Dialog, DialogTitle, DialogContent,DialogActions} from '@mui/material' 
import axios from 'axios'

const CustomerInsert = ({callAPI}) => {
    const [open, setOpen] = useState(false)
    const refFile =useRef(null)
    const [customer, setCustomer] =useState({
        file: null,
        fileName:'',
        name:'홍길동',
        job: '대학생',
        birthday: '2002-12-17',
        gender: '남자'
    });
    const {file,fileName, name,job,birthday,gender} =customer;
    const onFileChange = (e)=>{
        const newCustomer= {
        ...customer,
        file:e.target.files[0],
        fileName:e.target.value
        }
        setCustomer(newCustomer);
    };

    const onChange = (e) => {
        const newCustomer= {
            ...customer,
            [e.target.name]:e.target.value
        }
        setCustomer(newCustomer);
    }

    const onSubmit = async() => {
        const data = new FormData();
        data.append('image', file);
        data.append('name', name);
        data.append('birthday',birthday);
        data.append('job',job);
        data.append('gender',gender);
        const config = {Headers:{'content-type': 'multipart/form-data'}};
        const res = await axios.post('/customers/insert',data,config);//eslint-disable-line no-unused-vars
        
        callAPI();
        setOpen(false);
    }
  return (
    <div>
        <Button variant ='contained' onClick={()=>setOpen(true)}>고객 추가하기</Button>
        <Dialog open={open}>
            <DialogTitle>고객 추가</DialogTitle>
            <DialogContent>
                <input type="file" style={{display:'none'}} ref={refFile} onChange={onFileChange}/>
                <Button variant='contained' onClick={()=>refFile.current.click()}>
                    {fileName==='' ? '프로필 이미지 선택' : fileName}
                </Button>
                <br/><br/>
                <TextField onChange={onChange} name="name" value={name} variant='standard' sx={{width:'500px'}}/>
                <br/><br/>
                <TextField onChange={onChange} name="gender" value={gender} variant='standard' sx={{width:'500px'}}/>
                <br/><br/>
                <TextField onChange={onChange} name="job" value={job} variant='standard' sx={{width:'500px'}}/>
                <br/><br/>
                <TextField onChange={onChange} name="birthday" value={birthday} variant='standard' sx={{width:'500px'}}/>
            </DialogContent>
            <DialogActions>
                <Button variant='contained' onClick={onSubmit}>등록</Button>
                <Button variant='outlined' onClick={()=>setOpen(false)}>취소</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default CustomerInsert