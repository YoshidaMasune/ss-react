// -->____IMPORT dependencies____<-- 
import './App.css';
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// -->____ IMPORT PAGES____<-- 
import Home from './pages/Home';
import AddUser from './pages/AddUser';
import Error from './pages/Error';
import Addmin from './pages/Addmin'
import NavbarTop from './components/NavbarTop';
import EditUser from './pages/EditUser';
import AddminLogin from './pages/AddminLogin';

// -->?___MAIN APP__<--


function App() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [section, setSection] = useState(1);
  const [foor, setFoor] = useState(1);
  const [room, setRoom] = useState(1);
  const [name, setName] = useState('');
  const [jaya, setJaya] = useState('');
  const [miter, setMiter] = useState([])

  useEffect( () => {
    fetch('http://localhost:3300/api/users')
   .then(response => response.json())
   .then( data => {
      setUsers(data)
    })
}, []);

  return (
      <BrowserRouter>
        <NavbarTop />
          <Routes>
            <Route path='/' element={ <Home  users={users} setUsers={setUsers} /> } />

            <Route 
              path='adduser' element=
              { 
                <AddUser 
                  section={section} 
                  foor={foor} 
                  room={room}
                  name={name}
                  jaya={jaya}
                  users={users}
                  setSection={setSection} 
                  setFoor={setFoor}
                  setRoom={setRoom}
                  setName={setName}
                  setJaya={setJaya} 
                  setUsers={setUsers} /> 
              } />

          
            <Route 
              path='addmin' 
              element=
              { 
                <Addmin 
                  section={section} 
                  foor={foor} 
                  room={room}
                  name={name}
                  jaya={jaya}
                  users={users}
                  user={user}
                  miter={miter}
                  setSection={setSection} 
                  setFoor={setFoor}
                  setRoom={setRoom}
                  setName={setName}
                  setJaya={setJaya}
                  setUsers={setUsers}
                  setUser={setUser}
                  setMiter={setMiter}
                />
              }
            />

            <Route 
              path='edit' 
              element={ <EditUser 
                  section={section} 
                  foor={foor} 
                  room={room}
                  name={name}
                  jaya={jaya}
                  user={user}
                  users={users}
                  setSection={setSection} 
                  setFoor={setFoor}
                  setRoom={setRoom}
                  setName={setName}
                  setJaya={setJaya}
                  setuser={setUser}
                  setUsers={setUsers}
                />
              } />
      
            <Route path='login' element={ <AddminLogin /> } />
            <Route path='*' element={<Error /> } / >
          </Routes>
      </BrowserRouter>
  )
}

export default App;
