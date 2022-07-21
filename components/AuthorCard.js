/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteAuthorBooks } from '../api/mergedData';

function AuthorCard({
  email, firebaseKey, firstName, lastName, favorite, onUpdate,
}) {
  console.warn(firebaseKey);
  const deleteThisAuthor = () => {
    if (window.confirm(`Do you want to delete ${firstName} ?`)) {
      deleteAuthorBooks(firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '20px' }}>
      <Card.Body>
        <Card.Title>{firstName} {lastName}</Card.Title>
        <Card.Text>{email}</Card.Text>
        <Card.Text>{favorite ? 'Favorite Author' : ''}</Card.Text>
      </Card.Body>
      <div className="cardButtons">
        <Link href={`/author/${firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">V</Button>
        </Link>
        <Link href={`/author/edit/${firebaseKey}`} passHref>
          <Button variant="info" className="m-2">E</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
          D
        </Button>
      </div>
    </Card>
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

export default AuthorCard;
