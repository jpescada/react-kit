import React from 'react';

const propTypes = {
  title: React.PropTypes.string
};

const defaultProps = {
  title: 'H1 Heading'
};

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
      </header>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;