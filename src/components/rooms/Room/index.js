import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Una sala con todos los componentes que se necesitan para comunicarse.
 */
export default class Room extends Component {

  constructor () {
    super(...arguments);
    this.state = {};
  }

  componentDidMount () {
    this.updateScroll();
  }

  componentDidUpdate () {
    this.updateScroll();
  }

  render () {

    const { className, children, ...rest } = this.props;
    const cls = classNames('rooms-room', className);

    return (
      <div ref={r => (this.container = r)} className={cls} {...rest}>
        <div className='rooms-room__container'>
          <div className='rooms-room__content'>
            {children}
          </div>
        </div>
      </div>
    );
  }

  updateScroll (scroll) {
    this.container.scrollTop = typeof scroll === 'number' ?
      scroll :
      this.container.scrollHeight;
  }
}

Room.propTypes = {
  children: PropTypes.any
};
