import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Header', () => {
    it('renders', () => {
        const myWrapper = shallow(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
