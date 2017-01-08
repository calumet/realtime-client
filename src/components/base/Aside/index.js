import React, { PropTypes } from 'react';
import classNames from 'classnames';

export default function Aside (props) {

  const { onMenuToggle, hidden, className, children, ...rest } = props;
  const cls = classNames('base-aside', {
    'base-aside--hidden': hidden,
  }, className);

  return (
    <div className={cls} {...rest}>
      <div className='base-aside__content'>
        {children}
      </div>
      <div className='base-aside__left' onClick={onMenuToggle} />
    </div>
  );
}

Aside.propTypes = {
  children: PropTypes.any,
  hidden: PropTypes.bool,
  onMenuToggle: PropTypes.func,
};

Aside.defaultProps = {
  hidden: false,
  onMenuToggle: null,
};
