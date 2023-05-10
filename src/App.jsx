import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { stringify } from 'postcss';

function App() {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  

  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const users = { name, email };

    console.log(users);

    fetch('http://localhost:5000/users', {
      method: 'post',
      header: {
        'content-type': 'application/json',
      },

      body: JSON.stringify(users)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })


  }



  return (
    <div className="App">

      {
        users.map(user => <h2> Name: {user.name} : {user.email} </h2>)
      }

      <form className='flex justify-center' onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <input type="email" name="email" id="" />
        <input type="submit" value="Submit" />
      </form>

    </div>
  )
}

export default App
