import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);

describe('<App />', () => {
    it('renders without crashing hopefully', () => {
        expect(wrapper.contains(<header className="App-header" />))
    });
    it('renders App-body div', () => {
        expect(wrapper.contains(<main className="App-body" />))
    });
    it('renders App-footer div', () => {
        expect(wrapper.contains(<footer className="App-header" />))
    });
})
