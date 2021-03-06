import React, { PropTypes } from 'react';
import Dotdotdot from 'react-dotdotdot';
import classNames from 'classnames';

/**
 * Componente item sala de lista de salas.
 */
export default function RoomsListItem (props) {

  const { activity, active, children, className, ...rest } = props;
  const cls = classNames('rooms-list-item', {
    'rooms-list-item--activity': activity,
    'rooms-list-item--active': active,
  }, className);

  let htmlTitle;
  if (children) {
    const temp = document.createElement('div');
    temp.innerHTML = children;
    htmlTitle = temp.textContent;
  }

  return (
    <div className={cls} title={htmlTitle} {...rest}>
      <div className='rooms-list-item__container'>
        <div className='rooms-list-item__icon'>
          <i className=' mdi mdi-collage' />
        </div>
        <div className='rooms-list-item__name'>
          <Dotdotdot clamp={2}>
            {children}
          </Dotdotdot>
        </div>
      </div>
    </div>
  );
}

RoomsListItem.propTypes = {
  active: PropTypes.bool,
  activity: PropTypes.bool
};

RoomsListItem.defaultProps = {
  active: false,
  activity: false
};
