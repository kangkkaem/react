import React from 'react'
import {TableRow, TableCell, Button, IconButton} from '@mui/material';
import CustomerDelete from './CustomerDelete';
import CustomerRestore from './CustomerRestore';


const Customer = ({customer, callAPI}) => {
    const{id,name,image,job,date,gender, isDelete} =customer;
    return (
        <TableRow>
            <TableCell>{id}</TableCell>
            <TableCell><img src={image} width={70}/></TableCell>
            <TableCell>{name}</TableCell>
            <TableCell>{date}</TableCell>
            <TableCell>{gender}</TableCell>
            <TableCell>{job}</TableCell>
            <TableCell>
                {isDelete ===0 ? <CustomerDelete name={name} id={id} customer={customer} isDelete={isDelete} callAPI={callAPI}/>
                : <CustomerRestore id={id} callAPI={callAPI}/>}
                
            </TableCell>
        </TableRow>
    )
}

export default Customer