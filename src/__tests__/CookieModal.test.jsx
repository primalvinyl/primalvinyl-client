import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import CookieModal from '../components/CookieModal';

describe('CookieModal', () => {
    it('renders', () => {
        const myWrapper = shallow(
            <MemoryRouter>
                <CookieModal />
            </MemoryRouter>
        );
        expect(myWrapper.exists());
    });

    it('matches snapshot without props', () => {
        const component = Renderer.create(
            <MemoryRouter>
                <CookieModal />
            </MemoryRouter>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
