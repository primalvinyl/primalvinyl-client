import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import rootReducer from '../reducers';
import App from '../App'; 

describe('App', () => {
    const store = createStore(rootReducer, {});

    it('renders', () => {
        const myWrapper = shallow(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(component.toJSON()).toMatchSnapshot();
    });
});
