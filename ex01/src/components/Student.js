const Student = (props) => {
    const  {no, name, tel, address}=props;
    return(
        <tr >
            <td width={100}>{no}</td>
            <td width={100}>{name}</td>
            <td width={200}>{tel}</td>
            <td width={300}>{address}</td>
        </tr>
    );
}

export default Student;