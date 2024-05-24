/* eslint-disable react/prop-types */
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useEffect, useState } from "react";


function Search (props) {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => fetchUserData("octocat"), [])

  function fetchUserData(username) {
    fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((data) => {
      if(data.message === "Not Found") {
        setError(true);
      }else {
        setError(false);
        props.saveUserData(data);
        setUsername("");
      }
    });
  }

  function handleChange(e) {
    setUsername(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchUserData(username);
  }

  return (
    <div className='search-container'>
      <form 
        className='search-container__form | wrapper'
        onSubmit={handleSubmit}
      >
        <div className='input-container'>
          <MagnifyingGlass size={20} className='icon'/>
          <input
          type="text" 
          placeholder='Search...'
          className={`input ${props.darkMode ? 'dark' : ''}`}
          value={username}
          onChange={handleChange}
          />
          {error && <span className="error">No results</span>}
          <button className='button'>Search</button>
        </div>
      </form>
    </div>
  )
}

export default Search;