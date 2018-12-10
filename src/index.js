'use strict';

import React, { Component } from 'react';
import classnames from 'classnames';
import './styles.scss';

class ComponentDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      reset: true
    };
    this.countNum = 0;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        reset: false
      });
    }, 0);
    setInterval(() => {
      this.countNum = ++this.countNum % 15;
      if (!(this.countNum % 5)) {
        this.setState({
          activeIndex: Math.floor(this.countNum / 5),
          reset: true
        });
        setTimeout(() => {
          this.setState({
            reset: false
          });
        }, 30);
      }
    }, 1000)
  }

  render() {
    const { reset, activeIndex } = this.state;
    const lineStyle = classnames({
      line: true,
      w0: reset,
      w100: !reset
    });
    return (
      <div style={{width: 428}}>
        <ul className='navWrap' style={{transform: 'translate(0px, 0px)', opacity: 1}}>
          <li className={`activeNarBg active${activeIndex}`}>
            <div className={lineStyle}></div>
          </li>
          <li className={`nav ${activeIndex === 0 ? 'active' : ''}`}>111111111</li>
          <li className={`nav ${activeIndex === 1 ? 'active' : ''}`}>222222222</li>
          <li className={`nav ${activeIndex === 2 ? 'active' : ''}`}>333333333</li>
        </ul>
      </div>
    );
  }
}

export default ComponentDemo;
