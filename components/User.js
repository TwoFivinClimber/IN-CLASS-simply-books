/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Router from 'next/router';

function User({
  name, email, image, lastLogin,
}) {
  return (
    <>
      <Card className="profile text-center">
        <Card.Header>Your Profile</Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={image} alt={name} className="profileImg" />
          <Card.Title>{name}</Card.Title>
          <Card.Text>{email}</Card.Text>
          <Button variant="primary" onClick={() => Router.push('/')}>Home</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Last Login: {lastLogin}</Card.Footer>
      </Card>
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
