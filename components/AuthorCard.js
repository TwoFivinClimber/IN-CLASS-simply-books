/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
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
      <div>Email: {email}</div>
      <div>Firebase Key: { firebaseKey }</div>
      <div>First Name: {firstName}</div>
      <div>Last Name: {lastName}</div>
      <div>Favorite: {favorite.toString}</div>
      <Button variant="danger" className="m-2" onClick={deleteThisAuthor}>Delete</Button>
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
