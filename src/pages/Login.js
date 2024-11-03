import React from 'react';
import Template from '../components/Template';

const Login = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Savor the best dining experiences at Adarsh Bhojanalay."
      desc2="Login to manage your meal orders, view order history, and explore exclusive offers."
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}  // Ensure this is passed correctly
    />
  );
};

export default Login;
