import React from 'react';
import { Formik, Form, FormikValues } from 'formik';
import * as yup from 'yup';
import Input from './presentation/Input';
import Button from './presentation/Button';
import styles from './SearchForm.module.scss';

const SearchForm = ({ searchHandler, searchField }: SearchFormProps): React.ReactElement => {
    const initialValues: SearchFormValues = {
        searchField: searchField ? searchField : ''
    };

    const submitHandler = (values: FormikValues, actions: FormikValues) => {
        searchHandler(values.searchField);
        actions.setSubmitting(false);
    };

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <Formik
                    initialValues={initialValues}
                    onSubmit={submitHandler}
                    validateOnBlur={false}
                    validationSchema={yup.object().shape({
                        searchField: yup.string()
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
                            <div className={styles.searchInput}>
                                <Input
                                    type="search"
                                    id="searchField"
                                    value={values.searchField}
                                    errors={errors}
                                    touched={touched}
                                    disabled={isSubmitting}
                                    handleChange={handleChange}
                                    placeholder="Enter song, album, or artist"
                                    handleBlur={handleBlur} />
                            </div>
                            <div className={styles.searchButton}>
                                <Button
                                    id="searchButton"
                                    disabled={isSubmitting}
                                    background="none"
                                    color="#495057"
                                    aria-label="Search">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

type SearchFormValues = {
    searchField: string;
}

type SearchFormProps = {
    readonly searchHandler: (query: string) => void;
    readonly searchField?: string;
}

export default SearchForm;
