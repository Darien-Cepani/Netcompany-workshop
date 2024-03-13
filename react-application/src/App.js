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

  const reset = () => {
    setMyForm({name: '', email: ''});
  };

  return (
    <form>
    <input onChange={handleInputChange} name="name" placeholder="Name" />
    <input onChange={handleInputChange} name="email" placeholder="Email" />
    <button onClick={submit} type="submit">Submit</button>
    <button onClick={reset} type="reset">Cancel</button>
  </form>
  );
}

export default App;
