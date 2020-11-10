import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import { BreakpointProvider } from '../components/BreakpointProvider';

describe('BreakpointProvider', () => {
    it('renders', () => {
        const myWrapper = shallow(<BreakpointProvider />);
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(<BreakpointProvider />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
