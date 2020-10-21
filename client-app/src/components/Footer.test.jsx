import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import Footer from './Footer';

describe('Footer', () => {
    it('renders', () => {
        const myWrapper = shallow(<Footer />);
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(<Footer />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
