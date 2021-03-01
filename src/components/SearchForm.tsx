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
        <section className={styles.root}>
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
                                handleBlur={handleBlur} />
                        </div>
                        <div className={styles.searchSubmit}>
                            <Button
                                id="searchButton"
                                disabled={isSubmitting}
                                value="Search" />
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
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
