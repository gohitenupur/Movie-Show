import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const navigate =useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const user = { name, email,age,password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Registration successful!');
    // Redirect the user to the login page
    navigate('./')
  };

  return (
    <div
      className=""
      style={{ height: "100vh" }}
    >
       <center><h1>Registration</h1></center>
    <form onSubmit={handleRegister}>
      <label>
        Name:
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br/>
      <label>
        Age:
        <input type="number" value={age} onChange={(event) => setAge(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      <button type="submit">Register</button>
      <br/>
        <br/>
       <Link to='/'>Already have an account </Link> 
    </form>
    </div>
  );
}

export default Register