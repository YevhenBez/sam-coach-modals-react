import { useState } from 'react';
import MaterialUI from '../../components/MaterialUI';
import css from '../../pages/registerForm/css/registerForm.module.css';
import { useDispatch } from 'react-redux';
import { registration } from '../../redux/auth/authOperations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  // console.log(`name - ${name}; email - ${email}; password - ${password}`)

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(registration({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Registration form</h1>

      <form onSubmit={handleSubmit} className={css.header}>
        <label className={css.label}>
          <MaterialUI.TextField
            label="Name"
            helperText="Please enter your name"
            focused
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={css.label}>
          <MaterialUI.TextField
            label="Email"
            helperText="Please enter your email"
            focused
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={css.label}>
          <MaterialUI.TextField
            label="Password"
            focused
            helperText="Please enter your password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <MaterialUI.Button variant="contained" type="submit" color="success">
          Register
        </MaterialUI.Button>
      </form>
    </div>
  );
};

export default RegisterForm;
