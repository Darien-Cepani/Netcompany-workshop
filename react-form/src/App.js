import './App.css';
import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleInput = (e) => {
    const {name, value } = e.target
    console.log(name, value)
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <form>
      <input onChange={handleInput} name="name" placeholder="name" />
      <input onChange={handleInput} name="email" placeholder="email" />
      <button onClick={submit} type="submit">Submit</button>
    </form>
  )
}

export default App;
