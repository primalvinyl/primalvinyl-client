import * as React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import ProgressBar from '../components/presentation/ProgressBar';

describe('ProgressBar', () => {
    it('renders', () => {
        const myWrapper = shallow(<ProgressBar />);
        expect(myWrapper.exists());
    });
    
    it('matches snapshot', () => {
        const component = Renderer.create(<ProgressBar />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});