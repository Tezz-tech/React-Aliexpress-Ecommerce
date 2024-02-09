import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import register from "../img/register.png";
import sign from "../img/sign-in.png";

const RegisterLoginModal = ({ open, handleClose }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [registerFullName, setRegisterFullName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleRegister = async () => {
    if (
      selectedCountry === 'Select Country' ||
      registerFullName === '' ||
      registerEmail === '' ||
      registerPassword === ''
    ) {
      console.log('Please fill in all required fields, including selecting a country.');
      return;
    }

    try {
      const response = await fetch('http://159.65.21.42:9000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname: registerFullName,
          email: registerEmail,
          password: registerPassword,
          phone: selectedCountry,
        }),
      });

      if (response.ok) {
        console.log('Account created successfully');
        alert('Account created successfully');
      } else {
        console.error('Failed to create account');
        alert('Failed to create account');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Error during registration');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('https://6571b6e9d61ba6fcc013569c.mockapi.io/api/v1/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        console.error('Failed to fetch user data for login');
        alert('Login failed');
        return;
      }
  
      const users = await response.json();
  
      const matchedUser = users.find((user) => user.email === loginEmail && user.password === loginPassword);
  
      if (matchedUser) {
        console.log('Login successful');
        alert('Login successful');
        sessionStorage.setItem('aliexpress_user', JSON.stringify(matchedUser));
        handleClose(); 
      } else {
        console.error('Login failed. Incorrect email or password.');
        alert('Login failed. Incorrect email or password.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error during login');
    }
  };
  

  const isRegisterFormValid =
    registerFullName !== '' && registerEmail !== '' && registerPassword !== '' && selectedCountry !== 'Select Country';
  const isLoginFormValid = loginEmail !== '' && loginPassword !== '';

  const style = {
    padding: '40px 100px',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    maxWidth: '400px',
    margin: 'auto',
    textAlign: 'center',
    backgroundColor: 'white',
  };

  const countries = [
    { name: 'Select Country', flag: null },
    { name: 'Nigeria', flag: '🇳🇬' },
    { name: 'United States', flag: '🇺🇸' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'Brazil', flag: '🇧🇷' },
    { name: 'South Africa', flag: '🇿🇦' },
  ];

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          sx={{ mt: 2, backgroundColor: 'white', width: '600px', margin: 'auto', marginTop: '150px !important',borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px', }}
        >
          <Tab label="Register"  />
          <Tab label="Login" />
        </Tabs>
        {activeTab === 0 ? (
          <Box sx={style}>
            <TextField
              label="Full Name"
              fullWidth
              value={registerFullName}
              onChange={(e) => setRegisterFullName(e.target.value)}
              sx={{ mt: 2 }}
            />
            <TextField
              select
              label="Select Country"
              fullWidth
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              sx={{ mt: 2 }}
            >
              {countries.map((country) => (
                <MenuItem key={country.name} value={country.name}>
                  {country.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Email"
              fullWidth
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              sx={{ mt: 2 }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              sx={{ mt: 2 }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 2, backgroundColor: '#ff3b03', padding: "14px", borderRadius: "30px", fontWeight: "bold", fontSize: "18px", '&:hover': {
                backgroundColor: '#ff3b03',}, }}
              disabled={!isRegisterFormValid}
              onClick={handleRegister}
            >
              Register
            </Button>
            <img src={register} alt="Image1" style={{ marginTop: '10px', width: '100%' }} />
          </Box>
        ) : (
          <Box sx={style}>
            <TextField
              label="Email"
              fullWidth
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              sx={{ mt: 2 }}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              sx={{ mt: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2, backgroundColor: '#ff3b03', padding: "14px", borderRadius: "30px", fontWeight: "bold", fontSize: "18px", '&:hover': {
                backgroundColor: '#ff3b03',}, }}
              disabled={!isLoginFormValid}
              onClick={handleLogin}
            >
              Login
            </Button>
            <p className='forgot'>Forgot password?</p>
            <img src={sign} alt="Photo1" style={{ marginTop: '10px', width: '100%' }} />
          </Box>
        )}
      </Box>
    </Modal>
  );
};

export default RegisterLoginModal;
