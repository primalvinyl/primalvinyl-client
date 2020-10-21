import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import MasterTemplate from './MasterTemplate';

describe('MasterTemplate', () => {
    it('renders', () => {
        const myWrapper = shallow(<MasterTemplate />);
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(<MasterTemplate />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
