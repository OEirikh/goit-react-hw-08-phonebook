import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from 'Components/ContactForm/ContactForm.module.css';
import { useUserSignupMutation } from 'redux/AuthApi';
import { setUser } from 'redux/AuthSlise';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const [userSignup, { data, error, isError, isSuccess }] =
    useUserSignupMutation();

  const handleInputChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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

  const handleSubmit = async e => {
    e.preventDefault();
    await userSignup({ name, email, password });

    isSuccess &&
      dispatch(
        setUser({
          user: {
            name: data.user.name,
            email: data.user.email,
          },
          token: data.token,
          isLoggedIn: true,
        })
      );

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>RegisterView</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label className={s.form}>
          <p>Name</p>
          <input
            onChange={handleInputChange}
            value={name}
            type="text"
            name="name"
            className={s.input}
          />
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
            type="password"
            minLength={7}
            name="password"
            className={s.input}
          />
          <button
            className={s.button}
            // className={s.button}
            type="submit"
            disabled={name && email && password ? false : true}
          >
            Зарегистрироваца
            {/* {isLoading ? 'To register...Spiner' : 'To register'} */}
          </button>
        </label>
      </form>
    </div>
  );
}
