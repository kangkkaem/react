import React from 'react'



    const data ={
        shim: {
            name:'심청이',
            description : '리액트를 좋아하는 개발자'
        },
        hong: {
            name:'홍길동',
            description : '고전 소설 홍길동전의 주인공'
        },
        lee: {
            name:'이순신',
            description : '조선시대 장군'
        }
    };
    
    const Profile = ({match}) => {
        const username =match.params.username;
        const profile = data[username]
        return (
            <div>
                <h3>{username}({profile.name})</h3>
                <p>{profile.description}</p>
            </div>
        )
}

export default Profile