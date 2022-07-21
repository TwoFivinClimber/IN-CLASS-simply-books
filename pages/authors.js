import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import AuthorCard from '../components/AuthorCard';
import { getAuthors } from '../api/authorData';

function Authors() {
  const [authors, setAuthors] = useState([]);
  const { user } = useAuth();

  const getAllAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  useEffect(() => {
    getAllAuthors();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {authors.map((author) => (
        <AuthorCard key={author.firebaseKey} email={author.email} firebaseKey={author.firebaseKey} firstName={author.first_name} lastName={author.last_name} favorite={author.favorite} onUpdate={getAllAuthors} />
      ))}
    </>
  );
}

export default Authors;
