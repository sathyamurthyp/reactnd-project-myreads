import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import BookList from '../components/BookList'
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

describe('A suite', function() {
  it('should render without throwing an error', function() {
  	const wrapper = shallow(<BookList bookList={books} onChangeShelf={onChangeShelf} />);
    expect(wrapper.find('li').children()).to.have.length(bookList.length);
  });

