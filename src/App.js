import React from 'react';
import UserCard from './Components/UserCard/UserCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';
import Navbar from './Components/Navbar/Navbar';
import './App.css';

function App() {

  const [posts, setPosts] = React.useState([]);
  let [currentPosts,setCurrentPosts] = React.useState([]);
  let [currentPage, setCurrentPage] = React.useState(1);
  const [postsPerPage] = React.useState(10);
  const [searchTerm,setSearchTerm]=React.useState('');


  const [userList,setUserList]=React.useState([]);

  const getUsers = async () =>{
    const {data} = await axios.get('https://randomuser.me/api/?results=100');
    setUserList(data.results);
  }

  React.useEffect(()=>{
    setCurrentPosts(userList.slice(indexOfFirstPost, indexOfLastPost));
  },[userList]);

  React.useEffect(()=>{
    getUsers();
  },[]);

  let indexOfLastPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLastPost - postsPerPage;

  const forwardPage=()=>{
    if(currentPage<(100/postsPerPage)){
      setCurrentPage(++currentPage);
      console.log(currentPage);
      indexOfLastPost = currentPage * postsPerPage;
      indexOfFirstPost = indexOfLastPost - postsPerPage;
      setCurrentPosts(userList.slice(indexOfFirstPost, indexOfLastPost));
    }
  }

  const backwardPage=()=>{
    if(currentPage>1){
      setCurrentPage(--currentPage);
      console.log(currentPage)
      indexOfLastPost = currentPage * postsPerPage;
      indexOfFirstPost = indexOfLastPost - postsPerPage;
      setCurrentPosts(userList.slice(indexOfFirstPost, indexOfLastPost)); 
    }
  }


  return (
    <div className="App">
      <div className='container-large'>
        
        <Navbar setSearchTerm={setSearchTerm}/>
        
        <div className='container-medium' style={{marginTop:'14vh'}}>
          <div className='pagination-cont'>
              <ArrowBackIosIcon onClick={backwardPage} style={{cursor:'pointer'}}/>
              <div className='page-no'>
                {currentPage}
              </div>
              <ArrowForwardIosIcon onClick={forwardPage} style={{cursor:'pointer'}}/>
          </div>

          {
            currentPosts.filter((user)=>{
              if(searchTerm==""){
                return user;
              }else if(user.login.username.toLowerCase().includes(searchTerm.toLowerCase())){
                return user;
              }
            }).map((user)=>(
              <div className='user-card'>
                <UserCard  name={user.name.title+' '+user.name.first+' '+user.name.last}  
                  username={user.login.username}
                  email={user.email} 
                  dob={user.dob.date}  
                  address={user.location.street.number+' , '+user.location.street.name+' , '+
                  user.location.city+' , '+user.location.country+' , '+user.location.postcode}  
                  phone={user.phone.replace(/[^0-9]+/g, "")}  
                  gender={user.gender}
                  img={user.picture.large}/>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
