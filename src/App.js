import {useState, useEffect} from 'react'
import './App.css';
import Card from './Card';
import Modal from './Modal';

function App() {

  const [users, setUsers] = useState([])


  const fetchData = async() => {
    await fetch(`https://reqres.in/api/users`)
    .then(res => res.json())
    .then(data => setUsers(data.data))
  }
  
  const handleAddUser = async(user, email) => {    
    const val = {user, email}
    await fetch(`https://reqres.in/api/users`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(val),
    })
    .then(response => response.json())
    .then(data => {
      const res = `${data.user} with emailId ${data.email} created sucssefully`
      alert(res)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  
  useEffect(()=>{
    fetchData()
  },[users])

  return (
    <div className="App">
    <header className="header"> <strong> Manish App </strong> </header>
      <Card users={users} />
      <Modal handleAddUser = {handleAddUser} />
    </div>
  );
}

export default App;