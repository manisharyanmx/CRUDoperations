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
//const [userData, setUserData] = useState(user)

function handleIsOpen() {
    setIsOpen(true);
  }
 
function closeModal(){
    setIsOpen(false);
}


return( 
    <>    
        <div key={user.id}>
            <img key={user.avatar} src={user.avatar} alt="" />
            <div><button value={user.id} onClick={handleIsOpen} > Edit </button> <button> Delete </button></div>
            
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
            <input  type="text" placeholder = "Name Of Person"  value={user.first_name}/><br/>
            <input  type="email" placeholder = "Email Of Person" value={user.email} /><br/>
            <button style= {{backgroundColor: "dodgerblue", borderRadius: "8px"}}>Submit User Data</button><br/>
            <button style= {{backgroundColor: "dodgerblue", borderRadius: "8px"}}>close</button>
        </Modal>}
    </>
)}

export default User