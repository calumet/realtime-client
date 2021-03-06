import React, { PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Layout lista de salas.
 */
export default function RoomsList (props) {

  const { children, className, ...rest } = props;
  const cls = classNames('rooms-list', className);

  return (
    <div className={cls} {...rest}>
      <div className='rooms-list__items'>
        {children}
      </div>
    </div>
  );
}

RoomsList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};
