import React from 'react';
import { useRouter } from 'next/router';

export default function EditAuthor() {
  const { firebaseKey } = useRouter().query;
    <>
      <div>Edit Author</div>
      <div>{firebaseKey}</div>
    </>;
}
