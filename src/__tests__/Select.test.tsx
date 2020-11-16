import * as React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import Select from '../components/presentation/Select';

describe('Select', () => {
    it('renders', () => {
        const myWrapper = shallow(<Select />);
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(<Select />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});