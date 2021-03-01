import * as React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import BreadCrumbs from '../components/presentation/BreadCrumbs';

describe('BreadCrumbs', () => {
    const previousPages = [
        { title: 'test', link: 'test' }
    ];

    it('renders', () => {
        const myWrapper = shallow(
            <MemoryRouter>
                <BreadCrumbs
                    currentPage="test"
                    previousPages={previousPages} />
            </MemoryRouter>
        );
        expect(myWrapper.exists());
    });

    it('matches snapshot', () => {
        const component = Renderer.create(
            <MemoryRouter>
                <BreadCrumbs
                    currentPage="test"
                    previousPages={previousPages} />
            </MemoryRouter>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});