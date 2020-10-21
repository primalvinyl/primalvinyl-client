import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import AboutUs from './AboutUs';

describe('AboutUs', () => {
    it('renders', () => {
        const myWrapper = shallow(<AboutUs />);
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(<AboutUs />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
