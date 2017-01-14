import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Dotdotdot from 'react-dotdotdot';

/**
 * Componente de cabecera de aplicación.
 */
export default function Header (props) {

  const { onMenuToggle, title, subtitle, className, ...rest } = props;
  const cls = classNames('base-header', className);

  return (
    <div className={cls} {...rest}>
      <div className='row collapse align-justify align-middle'>
        <div className='column base-header__content'>
          <Dotdotdot clamp={1}>
            <h1 className='base-header__title'>{title}</h1>
          </Dotdotdot>
          <Dotdotdot clamp={1}>
            <h2 className='base-header__subtitle'>{subtitle}</h2>
          </Dotdotdot>
        </div>
        <div className='column shrink base-header__menu' onClick={onMenuToggle}>
          <div className='mdi mdi-menu' />
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  subtitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),

  /**
   * Cuando se trate de dar click en el menú, sólo visible en versión mobile.
   */
  onMenuToggle: PropTypes.func,
};

Header.defaultProps = {
  title: '',
  subtitle: '',
  onMenuToggle: null,
};
