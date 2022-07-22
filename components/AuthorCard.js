/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line no-unused-vars
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPenToSquare, faEye } from '@fortawesome/free-solid-svg-icons';
import { deleteAuthorBooks } from '../api/mergedData';

function AuthorCard({
  email, firebaseKey, firstName, lastName, favorite, onUpdate,
}) {
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
          <Button variant="primary" className="m-2">
            <FontAwesomeIcon icon={faEye} />
          </Button>
        </Link>
        <Link href={`/author/edit/${firebaseKey}`} passHref>
          <Button variant="info" className="m-2">
            <FontAwesomeIcon icon={faPenToSquare} />
          </Button>
        </Link>
        <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
          <FontAwesomeIcon icon={faTrash} />
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
