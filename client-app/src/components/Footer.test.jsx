import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer', () => {
    it('renders', () => {
        const myWrapper = shallow(<MemoryRouter><Footer /></MemoryRouter>);
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(<MemoryRouter><Footer /></MemoryRouter>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
