import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import AboutUs from '../routes/AboutUs';

describe('AboutUs', () => {
    it('renders', () => {
        const myWrapper = shallow(<MemoryRouter><AboutUs /></MemoryRouter>);
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(<MemoryRouter><AboutUs /></MemoryRouter>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
