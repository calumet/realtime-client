import React, { PropTypes } from 'react';
import Dotdotdot from 'react-dotdotdot';
import classNames from 'classnames';

/**
 * Componente de usuario de la comunicación.
 */
export default function User (props) {

  const { name, category, photo, online, className, ...rest } = props;
  const cls = classNames('users-user', {
    'users-user--online': online
  }, className);

  const photoStyle = {};
  if (photo) {
    photoStyle.backgroundImage = `url(${photo})`;
  }

  return (
    <div {...rest} className={cls}>
      <div className='users-user__row'>
        <div className='users-user__col users-user__col1'>
          <div className='users-user__photo' style={photoStyle} />
        </div>
        <div className='users-user__col users-user__col2'>
          <Dotdotdot clamp={1}>
            <div className='users-user__name'>{name}</div>
          </Dotdotdot>
          <Dotdotdot clamp={1}>
            <div className='users-user__cat'>{category}</div>
        </Dotdotdot>
        </div>
        <div className='users-user__col users-user__col3'>
          <div className='users-user__status'></div>
        </div>
      </div>
    </div>
  );
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
  photo: PropTypes.string,
  online: PropTypes.bool,
};

User.defaultProps = {
  name: '',
  category: '',
  photo: '',
  online: false,
};
