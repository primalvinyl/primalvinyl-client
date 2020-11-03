import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import MasterTemplate from '../components/MasterTemplate';

describe('MasterTemplate', () => {
    it('renders', () => {
        const myWrapper = shallow(
            <MemoryRouter>
                <MasterTemplate>Test</MasterTemplate>
            </MemoryRouter>
        );
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(
            <MemoryRouter>
                <MasterTemplate>Test</MasterTemplate>
            </MemoryRouter>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
