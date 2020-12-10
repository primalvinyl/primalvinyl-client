import * as React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import Select from '../components/presentation/Select';

describe('Select', () => {
    it('renders', () => {
        const myWrapper = shallow(
            <Select
                id="test"
                value="test"
                options={[]} />
        );
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(
            <Select
                id="test"
                value="test"
                options={[]} />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});