import React, { PropTypes } from 'react';
import classNames from 'classnames';
import moment from 'moment';
import i18n from 'core/i18n';

/**
 * Mensaje que será incluido en una sala.
 */
export default function Message (props = {}) {

  const { name, timestamp, photo, moderator, children, className, ...rest } = props;
  const cls = classNames('rooms-message', {
    'rooms-message--moderator': !!moderator
  }, className);
  const photoStyle = {
    backgroundImage: photo ? `url(${photo})` : null
  };

  const time = moment(timestamp).format('h:mm A');
  const moderatorTitle = i18n.t('moderator.title');

  return (
    <div className={cls} {...rest}>
      <div className='rooms-message__col'>
        <div className='rooms-message__photo' style={photoStyle}></div>
      </div>
      <div className='rooms-message__col'>
        <div>
          <span className='rooms-message__name'>{name}</span>
          {' '}
          <span className='rooms-message__time'>{time}</span>
          {' '}
          { moderator ?
            <i className='rooms-message__moderator mdi mdi-star' title={moderatorTitle} /> :
            null
          }
        </div>
        <div className='rooms-message__content'>
          <div className='rooms-message__fragment'>{children}</div>
        </div>
      </div>
    </div>
  );
}

Message.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired,
  name: PropTypes.string.isRequired,
  timestamp: PropTypes.any,
  photo: PropTypes.string,
  moderator: PropTypes.bool
};

Message.defaultProps = {
  timestamp: Date.now(),
  moderator: false
};
