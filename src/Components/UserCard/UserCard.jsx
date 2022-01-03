import React from 'react';
import './UserCard.css';

export default function UserCard({gender,name,username,email,dob,address,phone,img}) {

    const [btnState,setBtnState]=React.useState(true)
    
    function expand(userId){
        const a=document.getElementById(userId)
        a.style.maxHeight = a.scrollHeight + "px";
        setBtnState(false)
    }

    function hide(userId){
        const a=document.getElementById(userId)
        a.style.maxHeight = null;
        setBtnState(true)
    }

    const [DOB,setDOB]=React.useState()
    
    React.useEffect(()=>{
        dob=dob.slice(0,10);
        dob=dob.split('-')
        dob.reverse()
        setDOB(dob[0]+'/'+dob[1]+'/'+dob[2]);
    },[])

    return (
        <div className='user-card-cont'>
            <div className="user-img-cont">
                <div className="user-img-circle">
                    <img src={img} alt="" className="user-img" />
                </div>
            </div>
            <div className="user-btn-cont">
                {btnState ? (<div className="user-btn" onClick={(e) =>{expand(username)}}>
                    More
                </div>):
                (<div className="user-btn" onClick={(e) =>{hide(username)}}>
                    Less
                </div>)}
            </div>
            <div className="user-details-cont">
                <div className="user-full-name">{name}</div>
                <div className="user-username">{username}</div>
                
            </div>
            <div className="extra-details" id={username}>
                <div className="user-gender">{gender}</div>
                <div className="user-email">{email}</div>
                <div className="user-dob">{DOB}</div>
                <div className="user-address">{address}</div>
                <div className="user-ph-no">{phone}</div>
            </div>
        </div>
    )
}
