import React from 'react';
import './style/AddBook.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { APIURL } from '../util';

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  author: Yup.string().required('Author is required'),
  thumbnailUrl: Yup.string().url('Invalid URL').required('Thumbnail URL is required'),
});

const AddBookForm = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post(`${APIURL}/api/books`, values);
      console.log('Book added:', response.data);
      alert('Book added successfully!');
      resetForm();
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Error adding book!');
    }
  };

  return (
    <div className="form-container">
      <Formik
        initialValues={{
          title: '',
          author: '',
          thumbnailUrl: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="title">Title</label>
            <Field type="text" id="title" name="title" />
            <ErrorMessage name="title" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="author">Author</label>
            <Field type="text" id="author" name="author" />
            <ErrorMessage name="author" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="thumbnailUrl">Book Image URL</label>
            <Field type="text" id="thumbnailUrl" name="thumbnailUrl" />
            <ErrorMessage name="thumbnailUrl" component="div" className="error" />
          </div>

          <div>
            <button type="submit">Add Book</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddBookForm;
