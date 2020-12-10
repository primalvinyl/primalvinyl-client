import * as React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import Button from '../components/presentation/Button';

describe('Button', () => {
    it('renders', () => {
        const myWrapper = shallow(<Button id="test" />);
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(<Button id="test" />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});