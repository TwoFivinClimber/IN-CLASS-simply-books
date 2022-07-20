import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { getAuthorBooks, getSingleAuthor } from '../../api/authorData';
import AuthorCard from '../../components/AuthorCard';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const [authorBooks, setAuthorBooks] = useState([]);
  // const router = useRouter();
  const { firebaseKey } = useRouter().query;

  getSingleAuthor(firebaseKey).then(setAuthorDetails);
  getAuthorBooks(firebaseKey).then(setAuthorBooks);

  return (
    <>
      <AuthorCard firstName={authorDetails.first_name} lastName={authorDetails.last_name} email={authorDetails.email} />
      <div>
        {authorBooks.map((book) => (
          <BookCard key={book.firebaseKey} bookObj={book} />))};
      </div>
    </>
  );
}
