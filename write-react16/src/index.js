import React from 'react';

const element = <h1 title="hello">Hello, world!</h1>

const node = document.createElement(element.type);
node['title'] = element.props.title;

const text = document.createTextNode('');
text['nodeValue'] = element.props.children;

node.appendChild(text);

const container = document.getElementById('root');
container.appendChild(node);
