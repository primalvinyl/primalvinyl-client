import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import Renderer from 'react-test-renderer';
import rootReducer from './reducers';
import App from './App'; 

describe('App', () => {
    it('renders', () => {
        const store = createStore(rootReducer, {});
        const myWrapper = shallow(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(myWrapper.exists());
    });
    it('matches snapshot', () => {
        const component = Renderer.create(<App />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
