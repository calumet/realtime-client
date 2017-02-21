import React from 'react';
import classNames from 'classnames';
import Halogen from 'halogen';
import { DESIGN } from 'src/settings';

export default function Loader (props) {

  const { className, children, ...rest } = props;
  const cls = classNames('loader', className);

  return (
    <div className={cls} {...rest}>
      <Halogen.GridLoader className='loader__component' color={DESIGN.PRIMARY_COLOR} />
      <div className='loader__text'>{children}</div>
    </div>
  );
}
