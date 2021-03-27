import React from 'react';
import { Formik, Form, FormikValues } from 'formik';
import * as yup from 'yup';
import Input from './presentation/Input';
import Button from './presentation/Button';
import styles from './SearchForm.module.scss';

const SearchForm = ({
    searchSubmitHandler,
    searchClearHandler,
    searchField
}: SearchFormProps): React.ReactElement => {
    const [showDelete, setShowDelete] = React.useState(false);

    const initialValues: SearchFormValues = {
        searchField: searchField ? searchField : ''
    };

    const submitHandler = (values: FormikValues, actions: FormikValues) => {
        searchSubmitHandler(values.searchField);
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
                        searchField: yup.string().required('Search query required')
                    })}
                >
                    {({
                        values,
                        errors,
                        touched,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        resetForm
                    }: FormikValues) => {

                        const clearFieldHandler = () => {
                            searchClearHandler && searchClearHandler();
                            resetForm();
                            setShowDelete(false);
                        };

                        return (
                            <Form>
                                <div className={styles.searchInputWrapper}>
                                    <Input
                                        type="search"
                                        id="searchField"
                                        aria-label="Search Query"
                                        className={styles.searchInput}
                                        value={values.searchField}
                                        errors={errors}
                                        touched={touched}
                                        disabled={isSubmitting}
                                        handleChange={event => {
                                            handleChange(event);
                                            setShowDelete(event.target.value.length > 0);
                                        }}
                                        placeholder="Enter song, album, or artist"
                                        handleBlur={handleBlur} />
                                </div>
                                {showDelete &&
                                    <div className={styles.deleteButtonWrapper}>
                                        <Button
                                            id="deleteButton"
                                            className={styles.deleteButton}
                                            type="button"
                                            aria-label="Clear Search Query"
                                            background="none"
                                            color="#495057"
                                            onClick={clearFieldHandler}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>
                                        </Button>
                                    </div>
                                }
                                <div className={styles.searchButtonWrapper}>
                                    <Button
                                        id="searchButton"
                                        aria-label="Submit Search"
                                        className={styles.searchButton}
                                        disabled={isSubmitting || errors.searchField}
                                        background="none"
                                        color="#495057"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
                                    </Button>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
};

type SearchFormValues = {
    searchField: string;
}

type SearchFormProps = {
    readonly searchSubmitHandler: (query: string) => void;
    readonly searchClearHandler?: () => void;
    readonly searchField?: string;
}

export default SearchForm;
