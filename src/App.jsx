import { useEffect, useState } from 'react'
import Header from './components/Header'
import Search from './components/Search'
import UserCard from './components/UserCard'

function App() {
  let isDarkMode = JSON.parse(localStorage.getItem("dark-mode")) || false;
  const [darkMode, setDarkMode] = useState(isDarkMode);
  const [userData, setUserData] = useState({});

  function toggleDarkMode() {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    const body = document.body;
    if (body) {
      body.classList.toggle("dark", newDarkMode);
      body.classList.toggle("light", !newDarkMode);
    }

    localStorage.setItem("dark-mode", newDarkMode);
  }

  function saveUserData(user) {
    setUserData(user);
  }

  useEffect(() => {
    const body = document.body;
    if (body) {
      body.classList.toggle("dark", darkMode);
      body.classList.toggle("light", !darkMode);
    }
  }, [darkMode])

  return (
    <>
      <div className="container | flow | font-base"> 
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

        <Search saveUserData={saveUserData}/>

        <UserCard darkMode={darkMode} user={userData}/>
      </div>
      
    </>
  )
}

export default App