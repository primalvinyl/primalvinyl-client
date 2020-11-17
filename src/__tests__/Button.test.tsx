import * as React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import Button from '../components/presentation/Button';

describe('Button', () => {
    it('renders', () => {
        const myWrapper = shallow(<Button />);
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(<Button />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});