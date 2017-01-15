import React, { PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Layout lista de usuarios.
 */
export default function UsersList (props) {

  const { children, className, ...rest } = props;
  const cls = classNames('users-list', className);

  return (
    <div className={cls} {...rest}>
      <div className='users-list__list'>
        {children}
      </div>
    </div>
  );
}

UsersList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};
