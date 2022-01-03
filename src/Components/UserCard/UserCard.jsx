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
        <div className='user-card-cont' data-aos="flip-up" data-aos-duration="1000">
            <div className="anim-box"></div>
            <div className="user-card-cont-1">
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
                    <div className="user-gender"><b>Gender :</b> {gender}</div>
                    <div className="user-email"><b>Email :</b> {email}</div>
                    <div className="user-dob"><b>DOB :</b> {DOB}</div>
                    <div className="user-address"><b>Address :</b> {address}</div>
                    <div className="user-ph-no"><b>Phone No :</b> {phone}</div>
                </div>
            </div>
        </div>
    )
}
