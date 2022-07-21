import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AuthorCard from '../../components/AuthorCard';
import BookCard from '../../components/BookCard';
import { viewAuthorDetails } from '../../api/mergedData';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const { firebaseKey } = useRouter().query;

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  return (
    <>
      <AuthorCard firstName={authorDetails.first_name} lastName={authorDetails.last_name} email={authorDetails.email} />
      <div>
        {authorDetails.books?.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} />))}
      </div>
    </>
  );
}
