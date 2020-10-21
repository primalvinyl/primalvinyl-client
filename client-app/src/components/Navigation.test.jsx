import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import Navigation from './Navigation';

describe('Navigation', () => {
    it('renders', () => {
        const myWrapper = shallow(<Navigation />);
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(<Navigation />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
