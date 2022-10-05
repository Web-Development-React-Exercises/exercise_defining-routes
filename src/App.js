import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [people, setPeople] = useState([]);
  const [newName, setNewName] = useState('');

  const URL = 'http://localhost:3001/';

  function save(e) {
    e.preventDefault();
    const json = JSON.stringify({name : newName});
    axios.post(URL + 'new', json, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      setPeople(people => [...people, response.data]);
      setNewName('');
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    axios.get(URL)
      .then(res => {
        console.log(res.data)
        setPeople(res.data.names);
      }).catch(err => {
        console.log(err);
      });
  }, [])

  return (
    <>
      <h3>Calling Node Routes Demo</h3>
      <form onSubmit={save}>
        <input type="text" value={newName} onChange={e => setNewName(e.target.value)} />
        <button>Submit</button>
      </form>
      <ul>
        {people.map((person, index) => {
          return <li key={index}>{person}</li>
        })}
      </ul>
    </>
  );
}

export default App;
