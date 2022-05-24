import { useState } from 'react';
import s from 'Components/ContactForm/ContactForm.module.css';
export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>LoginView</h1>
      <form
        // autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label className={s.form}>
          <p>Email</p>
          <input
            onChange={handleInputChange}
            value={email}
            type="email"
            name="email"
            className={s.input}
          />
          <p>Password</p>
          <input
            onChange={handleInputChange}
            value={password}
            type="text"
            name="password"
            className={s.input}
          />
          <button
            className={s.button}
            type="submit"
            disabled={email && password ? false : true}
          >
            Войти
            {/* {isLoading ? 'Login...Spiner' : 'Login'} */}
          </button>
        </label>
      </form>
    </div>
  );
}
