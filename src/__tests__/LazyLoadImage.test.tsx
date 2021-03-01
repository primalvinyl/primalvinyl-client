import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import LazyLoadElement from '../components/presentation/LazyLoadElement';

describe('Header', () => {
    it('renders', () => {
        const myWrapper = shallow(
            <LazyLoadElement />
        );
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(
            <LazyLoadElement />
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
