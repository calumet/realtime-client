import React, { PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Layout lista de mensajes en una sala.
 */
export default function RoomMessages (props = {}) {

  const { className, children, ...rest } = props;
  const cls = classNames('rooms-roommessages', className);

  return (
    <div className={cls} {...rest}>
      {children}
    </div>
  );
}

RoomMessages.propTypes = {

  /**
   * Lista de mensajes.
   */
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};
