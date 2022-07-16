import React from 'react';
import { useRouter } from 'next/router';

export default function ViewAuthor() {
  const { firebaseKey } = useRouter().query;

  return (
    <>
      <div>View Author</div>;
      <div>{firebaseKey}</div>
    </>
  );
}
