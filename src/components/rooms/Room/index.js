import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Layout de una sala con todos los componentes que se necesitan para comunicarse.
 */
export default class Room extends Component {

  constructor () {
    super(...arguments);
    this.state = {};
  }

  render () {

    const { className, children, ...rest } = this.props;
    const cls = classNames('rooms-room', className);

    return (
      <div className={cls} {...rest}>
        <div className='rooms-room__container'>
          <div className='rooms-room__content'>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Room.propTypes = {
  children: PropTypes.any
};
