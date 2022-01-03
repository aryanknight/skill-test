import React from 'react';
import "./Navbar.css";

export default function Navbar({setSearchTerm}) {
    
    React.useEffect(()=>{
        window.addEventListener("scroll",function(){
            const nav=document.getElementsByClassName("navbar-cont")[0];
            if(window.scrollY>0){
                if(nav?.style){
                    nav.style.boxShadow="0 7px 13px 0 rgb(0 0 0 / 10%)";
                    nav.style.backgroundColor="#ffffff";
                }
            }else{
                if(nav?.style){
                    nav.style.boxShadow="none";
                    nav.style.backgroundColor="#ffffff00";
                }
            }
        });
    },[])
    

    return (
        <div className="navbar-cont" id="lg-nav">
            <div className="container-medium">
                <div className="navbar">
                    <div className="navbar-search">
                        <input onChange={e=>setSearchTerm(e.target.value)} className='search-bar' placeholder='Search Username'/>
                    </div>
                    <div className="navbar-menu">
                        
                    </div>
                </div>
            </div>
        </div>    
    )
}