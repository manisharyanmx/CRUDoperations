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
   
const ModalBox = ({ handleAddUser }) => {

const [isOpen, setIsOpen] = useState(false)
const [user, setUser] = useState('')
const [email, setEmail] = useState('')

function openModal(){
    setIsOpen(true);
}

function closeModal(){
    setIsOpen(false);
}

function handleAddUserName(e){
    setUser(e.target.value)
}

function handleAddEmail(e){
    setEmail(e.target.value)
}

function handleAddUserData(){
    handleAddUser(user, email)
}
return( 
    <>    
    {isOpen && <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="User Add"
        >
        <h1> Add User</h1>
            <input  type="text" placeholder = "Name Of Person"  value={user} onChange={handleAddUserName} /><br/>
            <input  type="email" placeholder = "Email Of Person" value={email} onChange={handleAddEmail} /><br/>
            <button style= {{backgroundColor: "dodgerblue", borderRadius: "8px"}} onClick = {handleAddUserData} > Submit User Data</button><br/>
            <button style= {{backgroundColor: "dodgerblue", borderRadius: "8px"}} onClick={closeModal} >close</button>
        </Modal>}
        <button onClick={openModal} > Add User </button>
    </>
)}

export default ModalBox