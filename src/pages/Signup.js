import React from 'react';
import Template from '../components/Template';

const Signup = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Join Us Today"
      desc1="Experience the best meals at Adarsh Bhojanalay."
      desc2="Sign up to order your favorite dishes, explore new meals, and enjoy exclusive offers."
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}  // Ensure this is passed correctly
    />
  );
};

export default Signup;
