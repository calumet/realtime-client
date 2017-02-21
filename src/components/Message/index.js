import React, { PropTypes } from 'react';
import classNames from 'classnames';
import moment from 'moment';
import i18n from 'src/i18n';

/**
 * Mensaje que será incluido en una sala.
 */
export default function Message (props = {}) {

  const { name, timestamp, photo, moderator, children, className, ...rest } = props;
  const cls = classNames('message', {
    'message--moderator': !!moderator
  }, className);
  const photoStyle = {
    backgroundImage: photo ? `url(${photo})` : null
  };

  const ts = timestamp || Date.now();

  const time = moment(ts).format('h:mm A');
  const timeTitle = moment(ts).format('YYYY MMM D, h:mm A');
  const moderatorTitle = i18n.t('moderator.title');

  return (
    <div className={cls} {...rest}>
      <div className='message__col'>
        <div className='message__photo' style={photoStyle}></div>
      </div>
      <div className='message__col'>
        <div>
          <span className='message__name'>{name}</span>
          {' '}
          <span className='message__time' title={timeTitle}>{time}</span>
          {' '}
          { moderator ?
            <i className='message__moderator mdi mdi-star' title={moderatorTitle} /> :
            null
          }
        </div>
        <div className='message__content'>
          <div className='message__fragment'>{children}</div>
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
  name: PropTypes.string,
  timestamp: PropTypes.any,
  photo: PropTypes.string,
  moderator: PropTypes.bool
};

Message.defaultProps = {
  name: i18n.t('user.unknown'),
  moderator: false
};
