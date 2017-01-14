import React, { PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Contenedor principal de la aplicación.
 */
export default function Main (props) {

  const { className, children, ...rest } = props;
  const cls = classNames('base-main', className);

  return (
    <div className={cls} {...rest}>
      {children}
    </div>
  );
}

Main.propTypes = {
  children: PropTypes.any
};
