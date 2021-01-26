import { useState } from 'react'
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
    }
  };
   
const User = ({user}) => {

const [isOpen, setIsOpen] = useState(false)
const [userId, setUserId] = useState('')

const [userName, setUserName] = useState('')
const [userEmail, setUserEmail] = useState('')

function handleIsOpen(e) {
    setIsOpen(true);
    setUserId(e.target.value)
  }
 
function closeModal(){
    setIsOpen(false);
}

const updateUserName = (e) => {
  setUserName(e.target.value)
}
const updateUserEmail = (e) => {
  setUserEmail(e.target.value)
}
const updateUser = async() => {
    const value = {
      "name" : userName, "email":userEmail
    }
    await fetch(`https://reqres.in/api/users/${userId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value),
    })
    .then(response => response.json())
    .then(data => {
      console.log("data is this one",data)
      alert(`data updated for user id ${userId} with ${data.name} and ${data.email}`)
      setIsOpen(false)
    }).catch((error) => {
      console.error('Error:', error);
    });
    setUserName(' ')
    setUserEmail(' ')
  }

  
return( 
    <>    
        <div key={user.id}>
            <img key={user.avatar} src={user.avatar} alt="" />
            <div>
              <button value={user.id} onClick={handleIsOpen} > Edit </button> 
            </div>
            <p><strong>{user.first_name + " " + user.last_name}</strong></p>
            <p>{user.email}</p>
        </div>
       {isOpen && <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="User Add"
        >
        <h1> Update User</h1>
            <input  type="text" placeholder = "Name Of Person"  value={userName} onChange={updateUserName} /><br/>
            <input  type="email" placeholder = "Email Of Person" value={userEmail} onChange={updateUserEmail} /><br/>
            <button style= {{backgroundColor: "dodgerblue", borderRadius: "8px"}} onClick = {updateUser} >Submit User Data</button><br/>
            <button style= {{backgroundColor: "dodgerblue", borderRadius: "8px"}} onClick={closeModal}>close</button>
        </Modal>}
    </>
)}

export default User