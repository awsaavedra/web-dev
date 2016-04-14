var React = require('react');
var Dropdown = require('./dropdown')

var options = {
  title: 'Choose a dessert', //what should show up on button
  items: [ //List of items
    'Apples',
    "Cobbler",
    "Cream pie"
  ]
};

var element = React.createElement(Dropdown, options);
React.render(element, document.querySelector('.container'));
