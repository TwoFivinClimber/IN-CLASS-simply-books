/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

function User({
  name, email, image, lastLogin,
}) {
  return (
    <>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <img src={image} alt={name} />
      <div>Last Login: {lastLogin} </div>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  image: PropTypes.string,
  lastLogin: PropTypes.string,
};

User.defaultProps = {
  name: 'No Username',
  email: 'me@gmail.com',
  image: 'https://picsum.photos/200',
  lastLogin: '1/1/1010, 10:47:98',
};

export default User;
