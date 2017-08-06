import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import BookShelf from '../components/BookShelf'
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

describe('A suite', function() {
  it('should render without throwing an error', function() {
  	const wrapper = shallow(<App />);
    expect(wrapper.containsAnyMatchingElements(<BookShelf/>).toBe(true);
  });

