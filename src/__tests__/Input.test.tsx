import * as React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import Input from '../components/presentation/Input';

describe('Input', () => {
    it('renders', () => {
        const myWrapper = shallow(
            <Input
                id="test"
                value="test" />
        );
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(
            <Input
                id="test"
                value="test" />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});