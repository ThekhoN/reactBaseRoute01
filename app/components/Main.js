var React = require('react');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Hello from Main!!!</h1>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
