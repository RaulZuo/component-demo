'use strict';

import React, { Component } from 'react';
import './styles.scss';

class ComponentDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="demo">
        This is component demo
      </div>
    );
  }
}

export default ComponentDemo;
