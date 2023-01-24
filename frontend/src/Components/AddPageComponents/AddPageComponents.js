import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import axios from 'axios';
import "./style.scss"

function AddPageComponents() {
    return (
        <section className='addpage'>
            <Formik
                initialValues={{ imgUrl: '', name: '', title: '', description:'' }}
                validationSchema={Yup.object({
                    imgUrl: Yup.string().required('*'),
                    name: Yup.string().required('*'),
                    title: Yup.string().required('*'),
                    description: Yup.string().required('*'),
                })}
                onSubmit={(values)  => {
                    console.log(values);
                    axios.post("http://localhost:8888/users",values)
                }}
            >
                <Form>
                    <div className='forms'>
                        <h1>Enter Teacher`s` Info</h1>
                        <label htmlFor="imgUrl">Enter image url  <Field name="imgUrl" type="text" />  <ErrorMessage name="imgUrl" /></label>

                        <label htmlFor="name">Enter name  <Field name="name" type="text" />  <ErrorMessage name="name" /></label>

                        <label htmlFor="title">Enter title  <Field name="title" type="text" />  <ErrorMessage name="title" /></label>

                        <label htmlFor="description">Enter description  <Field name="description" type="text" />  <ErrorMessage name="description" /></label>

                        <button type="submit">Submit</button>
                    </div>
                </Form>
            </Formik>
        </section>
    )
}

export default AddPageComponents