import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import MasterTemplate from '../components/_MasterTemplate';

describe('MasterTemplate', () => {
    it('renders', () => {
        const myWrapper = shallow(
            <MemoryRouter>
                <MasterTemplate>
                    <div>Test</div>
                </MasterTemplate>
            </MemoryRouter>
        );
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(
            <MemoryRouter>
                <MasterTemplate>
                    <div>Test</div>
                </MasterTemplate>
            </MemoryRouter>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
