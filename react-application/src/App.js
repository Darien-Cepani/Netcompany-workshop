import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [myForm, setMyForm] = useState({
    name: '',
    email: ''
  });

  const handleInputChange = (event) => {
    const{name, value} = event.target;
    console.log(name, value);
    setMyForm({
      ...myForm,
      [name]: value,
    });
  };

  const submit = (event) => {
    event.preventDefault();
    console.log(myForm);
  };

  return (
    <form onClick={submit}>
    <input onChange={handleInputChange} name="name" placeholder="Name" />
    <input onChange={handleInputChange} name="email" placeholder="Email" />
    <button type="submit">Submit</button>
    <button type="reset">Cancel</button>
  </form>
  );
}

export default App;
