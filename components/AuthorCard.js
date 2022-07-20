/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { deleteAuthorBooks } from '../api/mergedData';

export default function AuthorCard({
  email, firebaseKey, firstName, lastName, favorite, onUpdate,
}) {
  const deleteThisAuthor = () => {
    if (window.confirm(`Do you want to delete ${firstName} ?`)) {
      deleteAuthorBooks(firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <>
      <Card>
        <Card.Header>Author</Card.Header>
        <Card.Body>
          <Card.Title>{firstName} {lastName}</Card.Title>
          <Card.Text>{email}</Card.Text>
          <Card.Text>{favorite ? 'Favorite Author' : ''}</Card.Text>
          <Button variant="danger" className="m-2" onClick={deleteThisAuthor}>Delete</Button>
        </Card.Body>
      </Card>
    </>
  );
}

AuthorCard.propTypes = {
  email: PropTypes.string.isRequired,
  firebaseKey: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired,
};

AuthorCard.defaultProps = {
  favorite: true,
};
