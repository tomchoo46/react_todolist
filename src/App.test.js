import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('show "React Todolist" title', () => {
  console.log(App.getElementsByTagName('h1'));
  
  const h1 = document.getElementsByTagName('h1')
  expect(h1[0].innerHTML).toBe("React Todolist")
})