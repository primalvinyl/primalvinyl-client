import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import LazyLoadImage from '../components/utility/LazyLoadImage';

describe('Header', () => {
    it('renders', () => {
        const myWrapper = shallow(
            <LazyLoadImage />
        );
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(
            <LazyLoadImage />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
