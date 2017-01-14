import React, { PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Componente para mostrar el usuario actualmente logueado, tomando el componente
 * usuario como hijo y renderizandolo dentro de este.
 */
export default function UserCurrent (props) {

  const { children, className, ...rest } = props;
  const cls = classNames('users-usercurrent', className);

  return (
    <div {...rest} className={cls}>
      <div className='users-usercurrent__user'>
        {children}
      </div>
    </div>
  );
}

UserCurrent.propTypes = {
  children: PropTypes.element.isRequired,
};
