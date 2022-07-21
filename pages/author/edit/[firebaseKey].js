import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AuthorForm from '../../../components/forms/AuthorForm';
import { getSingleAuthor } from '../../../api/authorData';

export default function EditAuthor() {
  const [item, setItem] = useState({});
  const { firebaseKey } = useRouter().query;

  useEffect(() => {
    getSingleAuthor(firebaseKey).then(setItem);
  }, [firebaseKey]);

  return (<AuthorForm obj={item} />);
}
