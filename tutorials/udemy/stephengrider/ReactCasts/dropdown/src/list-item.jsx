var React = require('react');

module.exports = React.createClass({
  handleClick: function(){
    this.props.whenItemClicked(this.props.item); //callback function
  },
  render: function(){
      return <li className = {this.props.className}>
        <a onClick = {this.handleClick}>{this.props.item}</a>
      </li>
  }
});
