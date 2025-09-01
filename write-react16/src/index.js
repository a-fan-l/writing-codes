import React from '../react';

const element = <div><h1 title="hello">Hello, world!!!</h1><a href='#'>link</a></div>
console.log(element, 'element');

const container = document.getElementById('root');
React.render(element, container);