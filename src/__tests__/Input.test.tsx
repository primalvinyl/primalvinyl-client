import * as React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import Input from '../components/Input';

describe('Input', () => {
    it('renders', () => {
        const myWrapper = shallow(<Input />);
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(<Input />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});