import React, { PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Componente de mensaje en pantalla completo.
 */
export default function ScreenMessage (props = {}) {

  const { type, icon, className, children, ...rest } = props;
  const cls = classNames('screen-message', {
    'screen-message--error': type === 'error'
  }, className);

  return (
    <div className={cls} {...rest}>
      <div className="row align-center">
        <div className="column small-8 medium-6 large-5">
          <i className={`screen-message__icon mdi mdi-${icon}`}></i>
          <p className='screen-message__text'>{children}</p>
        </div>
      </div>
    </div>
  );
}

ScreenMessage.propTypes = {
  type: PropTypes.oneOf(['error']),
  icon: PropTypes.string,
  children: PropTypes.any
};

ScreenMessage.defaultProps = {
  icon: 'alert',
};
