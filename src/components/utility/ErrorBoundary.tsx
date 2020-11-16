import React from 'react';
import ErrorPage from '../../routes/ErrorPage';

type ErrorBoundaryProps = {
    readonly children: JSX.Element;
};

type ErrorBoundaryState = {
    hasError: boolean;
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render(): React.ReactElement {
        if (this.state.hasError) {
            return <ErrorPage />
        }
        else return this.props.children;
    }
}

export default ErrorBoundary;
