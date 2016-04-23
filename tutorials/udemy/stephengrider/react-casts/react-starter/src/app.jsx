var React = require('react');
var ReactDOM = require('react-dom');
var ReactFire = require('reactfire');
var Firebase = require('firebase');
var Header = require('./header');
var rootUrl = 'https://alexander-todo.firebaseio.com/';

var Hello = React.createClass({
  mixins: [ ReactFire],

  componentWillMount: function() {
    this.bindAsObject(new Firebase(rootUrl + 'items/'), 'items');
  },

  render: function() {
    return <div className = "row panel panel-default">
      <div className = "col-md-8 col-md-offset-2">
        <h2 className = "text-center">
          To-Do List
        </h2>
        <Header />
      </div>
    </div>
  }
});

var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
