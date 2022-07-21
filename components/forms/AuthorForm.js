import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import { createAuthor, updateAuthor } from '../../api/authorData';

const initialState = {
  email: '',
  favorite: false,
  first_name: '',
  last_name: '',
};

function AuthorForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateAuthor(formInput).then(() => router.push('/authors'));
    } else {
      const authorObj = { ...formInput, uid: user.uid };
      createAuthor(authorObj).then(() => {
        router.push('/authors');
      });
    }
  };

  return (

    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.firebaseKey ? 'Update' : 'Create'} Author</h2>
      <FloatingLabel controlId="floatingInput1" label="Author First Name" className="mb-3">
        <Form.Control type="text" placeholder="Author First Name" name="first_name" value={formInput.first_name} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="Author Last Name" className="mb-3">
        <Form.Control type="text" placeholder="Author Last Name" name="last_name" value={formInput.last_name} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput3" label="Author Email" className="mb-3">
        <Form.Control type="email" placeholder="Author Email" name="email" value={formInput.email} onChange={handleChange} required />
      </FloatingLabel>

      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="favorite"
        name="favorite"
        label="Favorite This Author ?"
        checked={formInput.favorite}
        onChange={(e) => setFormInput((prevState) => ({
          ...prevState,
          favorite: e.target.checked,
        }))}
      />
      <Button type="submit">{obj.firebaseKey ? 'Update' : 'Create'} Author</Button>
    </Form>
  );
}

AuthorForm.propTypes = {
  obj: PropTypes.shape({
    email: PropTypes.string,
    favorite: PropTypes.bool,
    firebaseKey: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
  }),
};

AuthorForm.defaultProps = {
  obj: initialState,
};

export default AuthorForm;
