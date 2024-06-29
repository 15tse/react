import React, { useState } from 'react';

function ValidationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const errorObject = {};

    if (name === '') {
      errorObject.name = 'Name is required';
    }

    if (email === '' || !email.includes('@')) {
      errorObject.email = 'Invalid email';
    }

    if (password === '' || password.length < 8) {
      errorObject.password = 'Password must be at least 8 characters';
    }

    setErrors(errorObject);

    if (Object.keys(errorObject).length === 0) {
      console.log('Form submitted successfully!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
      </label>

      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </label>

      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ValidationForm;
