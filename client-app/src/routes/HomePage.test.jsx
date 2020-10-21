import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

describe('HomePage', () => {
    it('renders', () => {
        const myWrapper = shallow(<MemoryRouter><HomePage /></MemoryRouter>);
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(<MemoryRouter><HomePage /></MemoryRouter>);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
