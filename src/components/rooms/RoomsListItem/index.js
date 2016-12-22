import React, { PropTypes } from 'react';
import Dotdotdot from 'react-dotdotdot';
import classNames from 'classnames';

/**
 * Componente item sala de lista de salas.
 */
export default function RoomsListItem (props) {

  const { activity, active, children, className, ...rest } = props;
  const cls = classNames('rooms-roomslistitem', {
    'rooms-roomslistitem--activity': !!activity,
    'rooms-roomslistitem--active': active
  }, className);

  return (
    <div className={cls} {...rest}>
      <div className='rooms-roomslistitem__name'>
        <Dotdotdot clamp={1}>
          <i className='mdi mdi-collage' /> {children}
        </Dotdotdot>
      </div>
      <div className='rooms-roomslistitem__activity'>
        <i className='mdi mdi-alert-box' />
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
