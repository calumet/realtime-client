import React, { PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Layout lista de usuarios.
 */
export default function UsersList (props) {

  const { children, className, ...rest } = props;
  const cls = classNames('users-userslist', className);

  return (
    <div className={cls} {...rest}>
      <div className='users-userslist__list'>
        {children}
      </div>
    </div>
  );
}

UsersList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};
