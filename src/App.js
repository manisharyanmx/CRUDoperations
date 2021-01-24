import {useState, useEffect} from 'react'
import './App.css';
import Card from './Card';
 
function App() {

  const [users, setUsers] = useState([])

  const fetchData = async() => {
    await fetch(`https://reqres.in/api/users`)
    .then(res => res.json())
    .then(data => setUsers(data.data))
  }

  const handleSubmit = async() => {
    
    const val = {name : "Manish" , email : "userEmail", contact:"userContact"}
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
      const res = `${data.name} with emailId ${data.email} and contact ${data.contact} created sucssefully`
      alert(res)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  const editUserDetails = async(value) => {
    console.log("id is : " , value)
    await fetch(`https://reqres.in/api/users/${value}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      /* body: JSON.stringify(val), */
    })
    .then(response => response)
    .then(data => alert("data deleted", data.status))
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  const handleUpdate = async(value) => {
  console.log("id is : " , value)
  await fetch(`https://reqres.in/api/users/${value}`,
  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    /* body: JSON.stringify(value), */
  })
  .then(response => response)
  .then(data => alert("data updated", data))
  .catch((error) => {
    console.error('Error:', error);
  });}

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className="App">
    <header className="header"> <strong> Manish App </strong> </header>
      <Card users={users} />
      <button type="submit" className="button" onClick = {handleSubmit} > + </button>
    </div>
  );
}

export default App;