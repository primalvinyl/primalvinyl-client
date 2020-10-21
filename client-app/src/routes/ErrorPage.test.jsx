import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
    it('renders', () => {
        const myWrapper = shallow(<ErrorPage />);
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(<ErrorPage />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
