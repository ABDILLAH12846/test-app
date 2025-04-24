import { useState } from 'react'
import styles from './login.module.css'
import TextInput from '../../element/text-input/text-input';
import { Button } from '../../element/button/button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, logout } from '../../redux/auth';
import { RootState } from '../../app/store';

export default function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  const handleLogin = () => {
    if (user === 'bambang' && pass === '12345') {
      dispatch(login());
      navigate('/task');
    } else {
      alert('Username/password salah!');
    }
  };
  const handleLogOut = () => {
    dispatch(logout())
  };
  return (
    <div className={styles.container}>
      {
        isAuthenticated ? (
          <div className={styles.wrapper}>
            <h3>Anda Sudah Login</h3>
            <Button onClick={handleLogOut} label='Log Out' />
          </div>
        ) : (
          <div className={styles.wrapper}>
            <TextInput value={user} placeholder='Masukkan username' onChange={(e) => setUser(e)} type='text' />
            <TextInput value={pass} placeholder='Masukkan password' onChange={(e) => setPass(e)} type='text' />
            <Button onClick={handleLogin} label='Login' />
          </div>
        )
      }
    </div>
  )
}
