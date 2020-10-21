import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import HomePage from './HomePage';

describe('HomePage', () => {
    it('renders', () => {
        const myWrapper = shallow(<HomePage />);
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(<HomePage />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
