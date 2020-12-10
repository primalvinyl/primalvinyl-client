import React from 'react';
import { Formik, Form, FormikValues } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { getArtists, clearArtists } from '../store/actions';
import Input from './presentation/Input';
import Button from './presentation/Button';
import styles from './SearchForm.module.scss';

const SearchForm = (): React.ReactElement => {
    const dispatch = useDispatch();
    const initialValues: searchFormValuesType = {
        searchField: ''
    };
    const submitHandler = (values: FormikValues, actions: FormikValues) => {
        dispatch(clearArtists());
        dispatch(getArtists({ query: values.searchField }));
        actions.setSubmitting(false);
    };

    return (
        <section className={styles.root}>
            <Formik
                initialValues={initialValues}
                onSubmit={submitHandler}
                validateOnBlur={false}
                validationSchema={yup.object().shape({
                    searchField: yup.string().required('This field is required.')
                })}
            >
                {({
                    values,
                    errors,
                    touched,
                    isSubmitting,
                    handleChange,
                    handleBlur
                }: FormikValues) => (
                    <Form>
                        <Input
                            type="search"
                            id="searchField"
                            value={values.searchField}
                            errors={errors}
                            touched={touched}
                            disabled={isSubmitting}
                            handleChange={handleChange}
                            handleBlur={handleBlur} />
                        <Button
                            id="searchButton"
                            disabled={isSubmitting}
                            value="Search" /> 
                    </Form>
                )}
            </Formik>
        </section>
    );
};

interface searchFormValuesType {
    searchField: string;
}

export default SearchForm;
