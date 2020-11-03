import React from 'react';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import rootReducer from '../reducers';
import Routes from '../routes/Routes';

describe('Routes', () => {
    const store = createStore(rootReducer, {});

    it('renders', () => {
        const myWrapper = shallow(
            <Provider store={store}>
                <MemoryRouter>
                    <Routes />
                </MemoryRouter>
            </Provider>
        );
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(
            <Provider store={store}>
                <MemoryRouter>
                    <Routes />
                </MemoryRouter>
            </Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
