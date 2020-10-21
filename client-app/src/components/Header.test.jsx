import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {
    it('renders', () => {
        const myWrapper = shallow(<Header />);
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(<Header />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
