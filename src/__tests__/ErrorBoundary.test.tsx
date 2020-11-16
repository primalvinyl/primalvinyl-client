import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import ErrorBoundary from '../components/utility/ErrorBoundary';

describe('ErrorBoundary', () => {
    it('renders', () => {
        const myWrapper = shallow(
            <ErrorBoundary>
                <div>Test</div>
            </ErrorBoundary>
        );
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(
            <ErrorBoundary>
                <div>Test</div>
            </ErrorBoundary>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
    it('throws error and displays error component', () => {
        const TestComponent = () => null;
        const myWrapper = shallow(
            <ErrorBoundary>
                <TestComponent />
            </ErrorBoundary>);
        const error = new Error('test');
        myWrapper.find(TestComponent).simulateError(error);
        expect(myWrapper.state()).toHaveProperty('hasError', true);
        expect(myWrapper.hasClass('error-page'));
    });
});
